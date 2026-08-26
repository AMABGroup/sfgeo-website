/**
 * Holds a photo slot open while Alli sources the replacement shot.
 *
 * Deliberately on-brand rather than a grey box: the frame keeps its exact
 * aspect and shadow, and the panel reads as a drawing sheet awaiting its
 * plate. The `subject` prop is the shot brief — it renders on the page, so
 * the site itself doubles as the shot list.
 *
 * To fill a slot, replace the whole component with the <Image> it stands in
 * for; nothing else on the page needs to change.
 */
export default function PhotoPlaceholder({
  subject,
  caption,
  className = "",
}: {
  subject: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#050A07] grain flex items-center justify-center ${className}`}
      role="img"
      aria-label={`Photograph to come — ${subject}`}
    >
      {/* survey grid, same language as the opening section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(143,191,159,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(143,191,159,0.22)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.16] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(45,90,58,0.32),transparent_65%)] pointer-events-none" />
      {/* registration corners */}
      <span className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/20" />
      <span className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/20" />
      <span className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/20" />
      <span className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/20" />

      <div className="relative z-10 text-center px-8 max-w-[85%]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#8FBF9F]/70 font-semibold mb-3">
          Photograph To Come
        </p>
        <p className="text-[13px] sm:text-sm text-white/55 font-light leading-relaxed">{subject}</p>
      </div>

      {caption && (
        <p className="absolute bottom-5 left-6 text-[11px] uppercase tracking-[0.25em] text-white/40 font-semibold z-10">
          {caption}
        </p>
      )}
    </div>
  );
}
