"use client";

import { useId, useRef } from "react";
import { PLAN_ACCEPT, formatPlanSize } from "@/lib/planLimits";
import { addPlans } from "@/lib/planUpload";

type Props = {
  files: File[];
  onFilesChange: (files: File[]) => void;
  error: string;
  onErrorChange: (error: string) => void;
  /** "dark" for the QuickQuoteCard concierge panel, "light" for the /contact form. */
  tone: "dark" | "light";
  disabled?: boolean;
};

const HELP = "PDF, images or DWG, up to 20 MB in total";

/**
 * Optional plan attachments for both enquiry forms. A plain button opens the
 * native file picker (the input itself stays hidden), chosen files are listed
 * with their size and a Remove control, and the limits are checked here
 * before anything is sent. Styled as one more underline field of the host form.
 */
export default function PlanAttach({ files, onFilesChange, error, onErrorChange, tone, disabled }: Props) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const labelId = `${id}-label`;
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const dark = tone === "dark";
  const describedBy = error ? `${helpId} ${errorId}` : helpId;
  // Short on the dark card so the row stays on one line in a 360 px phone pop-up.
  const action = files.length ? (dark ? "Add" : "Add more") : dark ? "Choose" : "Choose files";

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    // Clear the input so choosing the same file again still fires a change.
    e.target.value = "";
    if (!picked.length) return;
    const next = addPlans(files, picked);
    onFilesChange(next.files);
    onErrorChange(next.error);
  };

  const remove = (index: number) => {
    onFilesChange(files.filter((_, i) => i !== index));
    onErrorChange("");
    // The Remove button is gone, so keep focus in the field rather than on <body>.
    buttonRef.current?.focus();
  };

  return (
    <div className={dark ? "" : "flex flex-col gap-2"}>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={PLAN_ACCEPT}
        onChange={onPick}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {dark ? (
        <button
          ref={buttonRef}
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
          aria-describedby={describedBy}
          className={`w-full flex items-center justify-between gap-3 bg-transparent border-0 border-b py-3 px-0 text-left text-base sm:text-sm font-light text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FBF9F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050A07] rounded-sm transition-colors disabled:opacity-60 ${error ? "border-red-400/70" : "border-white/45 hover:border-white/70"}`}
        >
          <span>Attach plans (optional)</span>
          <span aria-hidden="true" className="shrink-0 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8FBF9F]">
            {action}
          </span>
        </button>
      ) : (
        <>
          <span id={labelId} className="text-[13px] font-bold tracking-widest text-slate-900 uppercase">
            Attach plans (optional)
          </span>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={disabled}
            aria-labelledby={labelId}
            aria-describedby={describedBy}
            className={`w-full min-h-[44px] flex items-center justify-between gap-4 bg-transparent border-b py-3 text-left text-lg font-light text-gray-500 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-green transition-colors disabled:opacity-60 ${error ? "border-red-400" : "border-gray-500 hover:border-forest-green"}`}
          >
            <span id={helpId}>{HELP}</span>
            <span aria-hidden="true" className="shrink-0 text-xs font-semibold tracking-wide text-forest-green">
              {action}
            </span>
          </button>
        </>
      )}

      {dark && (
        <p id={helpId} className="mt-1.5 text-[11px] text-white/60 font-light tracking-wide">
          {HELP}
        </p>
      )}

      <div aria-live="polite">
        {files.length > 0 && (
          <ul aria-label="Attached plans" className={dark ? "mt-2" : ""}>
            {files.map((f, i) => (
              <li
                key={`${f.name}-${f.size}-${f.lastModified}`}
                className={`flex items-center gap-3 font-light ${dark ? "text-xs text-white/85" : "text-[15px] text-slate-950"}`}
              >
                <span className="min-w-0 flex-1 truncate" title={f.name}>{f.name}</span>
                <span className={`shrink-0 tabular-nums ${dark ? "text-white/50" : "text-sm text-gray-500"}`}>{formatPlanSize(f.size)}</span>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  disabled={disabled}
                  aria-label={`Remove ${f.name}`}
                  className={`shrink-0 min-h-[40px] px-2 -mr-2 font-semibold transition-colors disabled:opacity-60 ${dark ? "text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8FBF9F] rounded-sm" : "text-xs tracking-wide text-forest-green hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-forest-green"}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className={dark ? "mt-1.5 text-xs text-red-300" : "text-red-600 text-xs mt-1"}>
          {error}
        </p>
      )}
    </div>
  );
}
