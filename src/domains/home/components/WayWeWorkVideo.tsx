"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Maximize, Minimize, Pause, Play } from "lucide-react";
import { WAY_WE_WORK_VIDEO } from "@/domains/home/constants/home";

const YOUTUBE_ORIGIN = "https://www.youtube-nocookie.com";

// Pulls the video ID out of the common YouTube link formats
// (watch?v=, youtu.be/, /embed/, /shorts/).
const getYouTubeId = (url: string) => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : null;
};

export default function WayWeWorkVideo() {
  const {
    youtubeUrl,
    videoTitle,
    pauseLabel,
    playLabel,
    fullscreenLabel,
    exitFullscreenLabel,
  } = WAY_WE_WORK_VIDEO;
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendCommand = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      YOUTUBE_ORIGIN,
    );
  };

  // Ask YouTube to send us player events (needed to detect when it ends).
  const startListening = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "listening" }),
      YOUTUBE_ORIGIN,
    );
  };
  const [isPaused, setIsPaused] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Loop: when YouTube reports the video ended (state 0), restart it.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== YOUTUBE_ORIGIN || typeof event.data !== "string") return;
      try {
        const data = JSON.parse(event.data);
        if (data?.info?.playerState === 0) {
          sendCommand("seekTo", [0, true]);
          sendCommand("playVideo");
        }
      } catch {
        // Ignore messages that aren't YouTube player events.
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Keep the icon in sync when the user leaves full screen with Esc.
  useEffect(() => {
    const onChange = () =>
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  const videoId = getYouTubeId(youtubeUrl);

  if (!videoId) return null;

  // Starts paused behind the cover image; plays muted with no YouTube
  // controls once the visitor presses play.
  // `enablejsapi` lets our own buttons control it. Looping is done by us (see
  // the effect above) instead of YouTube's playlist trick, which would make
  // YouTube show previous/next buttons.
  const params = new URLSearchParams({
    autoplay: "0",
    mute: "1",
    controls: "0",
    rel: "0",
    playsinline: "1",
    disablekb: "1",
    enablejsapi: "1",
  });

  const togglePlayback = () => {
    sendCommand(isPaused ? "playVideo" : "pauseVideo");
    setIsPaused(!isPaused);
    setHasStarted(true);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current?.requestFullscreen();
    }
  };

  return (
    // 8:3 banner like Figma on desktop. The 16:9 player is centred and
    // overflows top/bottom so it fills the box with no black bars.
    <div
      ref={containerRef}
      className="group relative aspect-video w-full overflow-hidden bg-[#000000] lg:aspect-[8/3]"
    >
      <iframe
        ref={iframeRef}
        onLoad={startListening}
        src={`${YOUTUBE_ORIGIN}/embed/${videoId}?${params.toString()}`}
        title={videoTitle}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 aspect-video w-full -translate-y-1/2"
      />

      {/* The video's own YouTube thumbnail until the first play, so YouTube's
          red play button never shows. */}
      {!hasStarted && (
        <div className="absolute inset-0">
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt={videoTitle}
            fill
            unoptimized
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
        </div>
      )}
      {/* Centre play/pause: always visible when paused, shown on hover or
          keyboard focus while playing so it doesn't cover the video. */}
      <button
        type="button"
        aria-label={isPaused ? playLabel : pauseLabel}
        onClick={togglePlayback}
        className={`absolute top-1/2 left-1/2 z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm transition-[opacity,transform] duration-300 hover:scale-105 focus-visible:opacity-100 lg:size-22 ${
          isPaused ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        {isPaused ? (
          <Play aria-hidden="true" className="ml-1 size-6 fill-[#FFFFFF] text-[#FFFFFF] lg:size-9" />
        ) : (
          <Pause aria-hidden="true" className="size-6 fill-[#FFFFFF] text-[#FFFFFF] lg:size-9" />
        )}
      </button>

      <button
        type="button"
        aria-label={isFullscreen ? exitFullscreenLabel : fullscreenLabel}
        onClick={toggleFullscreen}
        className="absolute right-4 bottom-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm transition-transform hover:scale-105 lg:right-6 lg:bottom-6 lg:size-12"
      >
        {isFullscreen ? (
          <Minimize aria-hidden="true" className="size-5 text-[#FFFFFF]" />
        ) : (
          <Maximize aria-hidden="true" className="size-5 text-[#FFFFFF]" />
        )}
      </button>
    </div>
  );
}
