"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PasscodeGate() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/docket/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });
      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Incorrect passcode");
        setStatus("error");
      }
    } catch {
      setError("Network error. Try again.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Image
            src="/docket/sfgeo-logo.png"
            alt="SFGEO"
            width={72}
            height={72}
            priority
            className="mx-auto mb-5"
          />
          <h1 className="text-2xl font-semibold text-sfgeo-ink">Docket Book</h1>
          <p className="text-sm text-sfgeo-label mt-2">Enter passcode to continue</p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            autoFocus
            value={passcode}
            onChange={(e) => {
              setPasscode(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Passcode"
            className="w-full text-center text-2xl tracking-widest font-mono bg-white border border-slate-200 rounded-xl py-4 px-4 outline-none focus:border-sfgeo-green focus:ring-2 focus:ring-sfgeo-green/20 min-h-[60px]"
          />
          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={status === "submitting" || !passcode}
            className="w-full bg-sfgeo-green text-white rounded-xl py-4 font-semibold text-base shadow-sm hover:bg-sfgeo-green/90 transition disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]"
          >
            {status === "submitting" ? "Checking…" : "Unlock"}
          </button>
        </form>
        <p className="text-xs text-slate-400 text-center mt-8">
          Tip: on iPhone, tap Share → Add to Home Screen to use as an app.
        </p>
      </div>
    </div>
  );
}
