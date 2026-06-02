"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SignaturePad, { type SignaturePadHandle } from "../SignaturePad";

const ENGINEER_SIG_KEY = "sfgeo_engineer_signature_v1";

export default function SignatureCapture() {
  const padRef = useRef<SignaturePadHandle | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const existing = localStorage.getItem(ENGINEER_SIG_KEY);
        const ts = localStorage.getItem(ENGINEER_SIG_KEY + "_ts");
        if (existing) setSaved(existing);
        if (ts) setSavedAt(new Date(parseInt(ts, 10)).toLocaleString());
      } catch {}
    });
  }, []);

  const trimAndSave = (): string | null => {
    const raw = padRef.current?.getDataUrl();
    if (!raw) return null;
    return raw; // SignaturePad already exports trimmed PNG of just the strokes
  };

  const onSave = () => {
    const dataUrl = trimAndSave();
    if (!dataUrl) {
      alert("Draw your signature first.");
      return;
    }
    try {
      localStorage.setItem(ENGINEER_SIG_KEY, dataUrl);
      localStorage.setItem(ENGINEER_SIG_KEY + "_ts", String(Date.now()));
      setSaved(dataUrl);
      setSavedAt(new Date().toLocaleString());
    } catch {
      alert("Couldn't save to this device's storage.");
    }
  };

  const onDownload = () => {
    const dataUrl = saved || trimAndSave();
    if (!dataUrl) {
      alert("Draw your signature first.");
      return;
    }
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "inspector-signature.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onClearSaved = () => {
    if (!confirm("Remove the saved engineer signature from this device?")) return;
    try {
      localStorage.removeItem(ENGINEER_SIG_KEY);
      localStorage.removeItem(ENGINEER_SIG_KEY + "_ts");
    } catch {}
    setSaved(null);
    setSavedAt(null);
    padRef.current?.clear();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center justify-between safe-top">
        <div className="flex items-center gap-3">
          <Image src="/docket/sfgeo-logo.png" alt="SFGEO" width={36} height={36} priority />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sfgeo-label leading-tight">Engineer signature</div>
            <div className="text-xs font-mono text-sfgeo-ink">One-time setup</div>
          </div>
        </div>
        <Link href="/docket" className="text-xs font-medium text-sfgeo-green hover:underline">
          Back to docket
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <h1 className="text-xl font-bold text-sfgeo-ink mb-2">Set your engineer signature</h1>
          <p className="text-sm text-sfgeo-label leading-relaxed">
            Draw it once with your finger or Apple Pencil. It saves to this iPad and auto-embeds
            in the <strong>Engineer sign-off</strong> block of every docket you create from this
            device. You can update or download it anytime.
          </p>
        </div>

        {saved && (
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-sfgeo-label">Current signature</div>
                {savedAt && <div className="text-[11px] text-sfgeo-label/70 mt-0.5">Saved {savedAt}</div>}
              </div>
              <button
                type="button"
                onClick={onClearSaved}
                className="text-xs text-red-600 font-medium hover:underline"
              >
                Remove
              </button>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-center min-h-[140px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={saved} alt="Current engineer signature" className="max-h-32 max-w-full" />
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-sfgeo-label">
              {saved ? "Draw a new signature" : "Draw your signature"}
            </h2>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <SignaturePad ref={padRef} label="Sign here" />
          </div>
          <p className="text-[11px] text-sfgeo-label mt-3 leading-relaxed">
            Tip: turn the iPad to landscape for more drawing room. The white background gets
            stripped automatically when the signature is embedded in PDFs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onSave}
            className="flex-1 bg-sfgeo-green text-white rounded-xl py-4 font-semibold shadow-sm hover:bg-sfgeo-green/90 transition min-h-[56px]"
          >
            {saved ? "Replace saved signature" : "Save signature"}
          </button>
          <button
            type="button"
            onClick={onDownload}
            className="flex-1 bg-white border border-slate-200 text-sfgeo-ink rounded-xl py-4 font-semibold hover:border-slate-300 transition min-h-[56px]"
          >
            Download PNG
          </button>
        </div>

        <p className="text-xs text-sfgeo-label leading-relaxed">
          The signature lives only on this iPad — it never gets sent to the SFGEO server unless
          attached to a docket you submit. Use <strong>Download PNG</strong> if you want a backup
          file, or to share it with another device.
        </p>
      </main>
    </div>
  );
}
