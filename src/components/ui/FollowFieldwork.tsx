const LINKS = [
  {
    label: "LinkedIn",
    href: "https://au.linkedin.com/company/sfgeo",
    icon: (
      <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.475-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/sfgeo.syd",
    icon: (
      <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

type Props = {
  variant?: "light" | "dark";
  /** Extra classes on the wrapper (alignment, margins, hero-line entrance). */
  className?: string;
  /** Kicker text above the links. */
  label?: string;
};

/**
 * "Follow the fieldwork" — the two channels the site sends people to, drawn
 * once and used in every hero and close. Monochrome icons in a hairline
 * circle; the circle fills on hover.
 */
export default function FollowFieldwork({ variant = "light", className = "", label = "Follow The Fieldwork" }: Props) {
  const dark = variant === "dark";
  return (
    <div className={className}>
      <p className={`text-[10px] uppercase tracking-[0.3em] font-semibold mb-4 ${dark ? "text-white/45" : "text-gray-500"}`}>{label}</p>
      <ul className="flex items-center gap-7">
        {LINKS.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] uppercase transition-colors ${dark ? "text-white/80 hover:text-white" : "text-slate-950 hover:text-forest-green"}`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${dark ? "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] group-hover:bg-white group-hover:text-[#050A07]" : "shadow-[inset_0_0_0_1px_rgba(10,10,10,0.18)] group-hover:bg-forest-green group-hover:text-white group-hover:shadow-none"}`}
              >
                {l.icon}
              </span>
              <span>{l.label}</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
