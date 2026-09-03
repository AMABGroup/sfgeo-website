import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  src: string;
  alt: string;
  /** Small uppercase caption in the bottom-left corner. */
  caption?: ReactNode;
  /** Tailwind aspect class, e.g. "aspect-[4/3]". */
  aspect?: string;
  sizes: string;
  priority?: boolean;
  /** Extra classes on the frame (max-width, margins, etc). */
  className?: string;
  /** Extra classes on the Reveal wrapper. */
  wrapperClassName?: string;
  /** Entrance delay in ms. */
  delay?: number;
  /** Strength of the bottom gradient: "soft" for busy captions, "none" to skip. */
  scrim?: "soft" | "strong" | "none";
  /** Object position, e.g. "object-top". */
  position?: string;
  children?: ReactNode;
};

/**
 * Framed editorial photograph — one radius, shadow, gradient and caption
 * position across the whole site, with the mask-reveal entrance and a
 * slow hover drift. Drop-in replacement for the hand-built image blocks.
 */
export default function PhotoFrame({
  src,
  alt,
  caption,
  aspect = "aspect-[4/3]",
  sizes,
  priority,
  className = "",
  wrapperClassName = "",
  delay = 0,
  scrim = "strong",
  position = "object-center",
  children,
}: Props) {
  const scrimCls =
    scrim === "none"
      ? ""
      : scrim === "soft"
        ? "bg-gradient-to-t from-[#050A07]/60 via-[#050A07]/10 to-transparent"
        : "bg-gradient-to-t from-[#050A07]/80 via-[#050A07]/25 to-transparent";
  return (
    <Reveal variant="group" className={wrapperClassName}>
      <div data-fx="mask" className={`photo-frame ${aspect} ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
        <div className="unveil">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${position}`} />
        </div>
        {scrimCls && <div className={`absolute inset-0 ${scrimCls}`} />}
        {caption && (
          <p
            data-fx="rise"
            style={{ "--d": `${delay + 420}ms` } as CSSProperties}
            className="absolute bottom-5 left-6 right-6 text-[11px] uppercase tracking-[0.25em] text-white font-semibold"
          >
            {caption}
          </p>
        )}
        {children}
      </div>
    </Reveal>
  );
}
