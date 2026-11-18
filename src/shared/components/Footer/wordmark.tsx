import { WORDMARK_LETTERS } from "@/lib/constants/footer";

export function FooterWordmark({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex flex-col w-full bg-[length:100%_auto] bg-[position:center_bottom] bg-no-repeat ${className}`}
      style={{ backgroundImage: `url('${src}')` }}
    >
      <div className="pointer-events-none absolute -top-0.5 inset-x-0 z-20 h-0.5 bg-black" />
      {/* Top Section: Blurred overlay with transparent text cutout */}
      <div className="relative w-full h-[14vw] sm:h-[9.42vw] overflow-hidden">
        <div className="absolute inset-0 -bottom-1 backdrop-blur-[0.3rem]" />
        <div className="absolute inset-0 bg-black mix-blend-multiply flex items-end justify-center sm:justify-start sm:pl-[6.25%]">
          <div className="text-[21vw] sm:text-[14vw] font-bold text-white tracking-[-0.030em] leading-none translate-y-[20%] scale-x-[1.20] sm:scale-x-100">
            {WORDMARK_LETTERS.map(({ char, className }, i) => (
              <span key={i} className={className}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Section: Empty div that lets the unblurred clear background image show through */}
      <div className="w-full h-[42vw] sm:h-[max(5rem,10.4vw)]" />
    </div>
  );
}