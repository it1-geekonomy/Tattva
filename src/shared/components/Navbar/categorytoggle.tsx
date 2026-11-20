import { CATEGORIES, Category } from "@/lib/constants/navbar";
import Typography from "@/lib/Typography";

export function CategoryToggle({
  category,
  onChange,
  className,
  menuOpen,
}: {
  category: Category;
  onChange: (category: Category) => void;
  className: string;
  menuOpen?: boolean;
}) {
  return (
    <div
      className={`flex items-center border border-[#3A2E31] p-1 ${className} ${
        menuOpen === undefined
          ? ""
          : `transition-[translate,opacity] motion-reduce:transition-none ${
              menuOpen
                ? "translate-y-0 opacity-100 duration-[460ms,280ms] ease-[cubic-bezier(0.22,1,0.36,1),ease-out]"
                : "translate-y-[110%] opacity-0 duration-[200ms,160ms] ease-[cubic-bezier(0.4,0,1,1),ease-in]"
            }`
      }`}
    >
      <div className="relative grid h-full w-full grid-cols-2 items-center">
        <span
          aria-hidden="true"
          className={`absolute inset-y-0 left-0 w-1/2 bg-[#3A2E31] transition-transform duration-300 ease-in-out ${
            category === "Modular" ? "translate-x-full" : ""
          }`}
        />
        {CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-pressed={category === item}
            className="relative z-10 h-full cursor-pointer whitespace-nowrap px-2 text-[#323232] transition-colors"
          >
            <Typography
              variant="body-lg"
              as="span"
              className={`font-medium transition-colors duration-300 ${
                category === item ? "text-white" : "text-[#323232]"
              }`}
            >
              {item}
            </Typography>
          </button>
        ))}
      </div>
    </div>
  );
}