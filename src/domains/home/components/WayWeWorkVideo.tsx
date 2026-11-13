"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { WAY_WE_WORK_VIDEO } from "@/domains/home/constants/home";

export default function WayWeWorkVideo() {
  const { videoSrc, poster, playLabel } = WAY_WE_WORK_VIDEO;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[#000000] lg:aspect-[8/3]">
      {isPlaying && videoSrc ? (
        <video
          src={videoSrc}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <>
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/35" />
          <button
            type="button"
            aria-label={playLabel}
            disabled={!videoSrc}
            onClick={() => setIsPlaying(true)}
            className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm transition-transform hover:scale-105 disabled:cursor-default disabled:hover:scale-100 lg:size-22"
          >
            <Play
              aria-hidden="true"
              className="ml-1 size-6 fill-[#FFFFFF] text-[#FFFFFF] lg:size-9"
            />
          </button>
        </>
      )}
    </div>
  );
}
