type Props = {
  items: string[];
  /** Seconds per loop. */
  speed?: number;
  variant?: "light" | "dark";
  className?: string;
};

/**
 * A slow text ticker — suburbs served, standards followed. CSS only: pauses
 * on hover, stacks into a wrapped list under prefers-reduced-motion. The
 * second copy is aria-hidden so screen readers hear the list once.
 */
export default function Marquee({ items, speed = 70, variant = "light", className = "" }: Props) {
  const dark = variant === "dark";
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex items-center shrink-0">
      {items.map((it, i) => (
        <li key={`${it}-${i}`} className={`flex items-center whitespace-nowrap text-[12px] uppercase tracking-[0.26em] font-semibold ${dark ? "text-white/60" : "text-gray-500"}`}>
          <span className="px-6 lg:px-8">{it}</span>
          <span aria-hidden="true" className={`w-1 h-1 rounded-full ${dark ? "bg-[#8FBF9F]/70" : "bg-forest-green/70"}`} />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee py-5 ${className}`} style={{ "--marquee-s": `${speed}s` } as React.CSSProperties}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
