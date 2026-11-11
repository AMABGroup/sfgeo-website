import Link from "next/link";
import { Fragment } from "react";

const AREAS = [
  { name: "North Shore", href: "/geotechnical-engineer-north-shore" },
  { name: "Eastern Suburbs", href: "/geotechnical-engineer-eastern-suburbs" },
  { name: "Inner West", href: "/geotechnical-engineer-inner-west" },
  { name: "Parramatta", href: "/geotechnical-engineer-parramatta" },
  { name: "Hills District", href: "/geotechnical-engineer-hills-district" },
  { name: "South West Sydney", href: "/geotechnical-engineer-south-west-sydney" },
  { name: "Canterbury-Bankstown", href: "/geotechnical-engineer-canterbury-bankstown" },
  { name: "St George & Sutherland Shire", href: "/geotechnical-engineer-st-george-sutherland-shire" },
];

/**
 * One fine-print line of links to the region pages, in the register of the
 * facts lines. No visible label. Pass the page's own path as `current` to
 * leave that page out of its own line.
 */
export default function OtherAreas({ current, className }: { current?: string; className?: string }) {
  const areas = AREAS.filter((a) => a.href !== current);
  return (
    <nav aria-label="Other areas" className={className}>
      <p className="text-xs text-gray-500 font-light tracking-wide leading-relaxed">
        {areas.map((a, i) => (
          <Fragment key={a.href}>
            {i > 0 && " · "}
            <Link href={a.href} className="hover:text-forest-green transition-colors">{a.name}</Link>
          </Fragment>
        ))}
      </p>
    </nav>
  );
}
