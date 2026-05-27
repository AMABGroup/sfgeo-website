"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SignaturePad, { type SignaturePadHandle } from "./SignaturePad";

type FormState = {
  inspectionDate: string;
  inspectorName: string;
  jobType: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientPhone: string;
  siteAddress: string;
  timeOn: string;
  timeOff: string;
  notes: string;
  sendCopyToClient: boolean;
};

const JOB_TYPES = ["Drilling", "Geotechnical consulting"];

const STORAGE_KEY = "sfgeo_docket_draft_v1";
const INSPECTOR_KEY = "sfgeo_docket_inspector_v1";

function todayIsoDate(): string {
  const d = new Date();
  const tz = d.getTimezoneOffset();
  const local = new Date(d.getTime() - tz * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function nowHHMM(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function generateDocketNumber(): string {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 90 + 10);
  return `${yy}${mm}${dd}-${hh}${mi}-${rand}`;
}

const emptyForm: FormState = {
  inspectionDate: todayIsoDate(),
  inspectorName: "",
  jobType: JOB_TYPES[0],
  clientName: "",
  clientCompany: "",
  clientEmail: "",
  clientPhone: "",
  siteAddress: "",
  timeOn: "",
  timeOff: "",
  notes: "",
  sendCopyToClient: true,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function DocketForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [docketNumber, setDocketNumber] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submittedNumber, setSubmittedNumber] = useState<string>("");
  const inspectorSigRef = useRef<SignaturePadHandle | null>(null);
  const clientSigRef = useRef<SignaturePadHandle | null>(null);

  useEffect(() => {
    queueMicrotask(() => {
      setDocketNumber(generateDocketNumber());
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as Partial<FormState>;
          setForm((f) => ({ ...f, ...parsed }));
        } else {
          const savedInspector = localStorage.getItem(INSPECTOR_KEY) || "";
          if (savedInspector) setForm((f) => ({ ...f, inspectorName: savedInspector }));
        }
      } catch {}
    });
  }, []);

  useEffect(() => {
    if (status === "success") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {}
  }, [form, status]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const setTimeOnNow = () => update("timeOn", nowHHMM());
  const setTimeOffNow = () => update("timeOff", nowHHMM());

  const resetAll = () => {
    setForm({ ...emptyForm, inspectorName: form.inspectorName });
    setDocketNumber(generateDocketNumber());
    inspectorSigRef.current?.clear();
    clientSigRef.current?.clear();
    setStatus("idle");
    setErrorMessage("");
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const logout = async () => {
    await fetch("/api/docket/auth", { method: "DELETE" });
    router.refresh();
  };

  const validate = (): string | null => {
    if (!form.inspectorName.trim()) return "Inspector name is required.";
    if (!form.clientName.trim()) return "Client name is required.";
    if (!form.clientEmail.trim() || !form.clientEmail.includes("@")) return "Valid client email is required.";
    if (!form.clientPhone.trim()) return "Client phone is required.";
    if (!form.siteAddress.trim()) return "Site address is required.";
    if (!form.jobType) return "Select a job type.";
    return null;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMessage(err);
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      docketNumber,
      inspectionDate: form.inspectionDate,
      inspectorName: form.inspectorName,
      jobType: form.jobType,
      clientName: form.clientName,
      clientCompany: form.clientCompany,
      clientEmail: form.clientEmail,
      clientPhone: form.clientPhone,
      siteAddress: form.siteAddress,
      timeOn: form.timeOn,
      timeOff: form.timeOff,
      notes: form.notes,
      inspectorSignature: inspectorSigRef.current?.getDataUrl() || undefined,
      clientSignature: clientSigRef.current?.getDataUrl() || undefined,
      sendCopyToClient: form.sendCopyToClient,
    };

    try {
      const res = await fetch("/api/docket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        try { localStorage.setItem(INSPECTOR_KEY, form.inspectorName); } catch {}
        try { localStorage.removeItem(STORAGE_KEY); } catch {}
        setSubmittedNumber(data.docketNumber || docketNumber);
        setStatus("success");
      } else {
        setErrorMessage(data.error || "Something went wrong sending the docket.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again — your draft is saved on this device.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-forest-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Docket sent</h1>
        <p className="text-slate-600 mb-1 text-sm">
          {form.sendCopyToClient ? `Emailed to ${form.clientEmail}` : "Saved to admin"}
        </p>
        <p className="text-slate-400 text-xs mb-8">Docket #{submittedNumber}</p>
        <button
          type="button"
          onClick={resetAll}
          className="bg-forest-green text-white rounded-xl py-4 px-8 font-semibold shadow-sm hover:bg-forest-green/90 transition min-h-[56px] w-full max-w-xs"
        >
          New docket
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 outline-none focus:border-forest-green focus:ring-2 focus:ring-forest-green/15 min-h-[48px]";
  const labelCls = "text-[11px] font-bold tracking-widest uppercase text-slate-500";

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-forest-green text-white px-4 py-3 flex items-center justify-between safe-top">
        <div>
          <div className="text-xs opacity-75 leading-tight">SFGEO Docket Book</div>
          <div className="text-sm font-mono font-semibold">#{docketNumber || "…"}</div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="text-xs underline opacity-80 hover:opacity-100"
        >
          Lock
        </button>
      </header>

      <form onSubmit={submit} className="max-w-xl mx-auto px-4 py-6 flex flex-col gap-6 pb-32">
        {/* Job details */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Job details</h2>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Inspection date</span>
            <input
              type="date"
              value={form.inspectionDate}
              onChange={(e) => update("inspectionDate", e.target.value)}
              className={inputCls}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Inspector</span>
            <input
              type="text"
              value={form.inspectorName}
              onChange={(e) => update("inspectorName", e.target.value)}
              autoComplete="name"
              placeholder="Your name"
              className={inputCls}
            />
          </label>
          <fieldset className="flex flex-col gap-1.5">
            <legend className={labelCls + " mb-1"}>Job type</legend>
            <div className="grid grid-cols-2 gap-2">
              {JOB_TYPES.map((jt) => {
                const active = form.jobType === jt;
                return (
                  <button
                    type="button"
                    key={jt}
                    onClick={() => update("jobType", jt)}
                    className={`rounded-xl py-3 px-3 text-sm font-medium border transition min-h-[48px] ${
                      active
                        ? "bg-forest-green text-white border-forest-green"
                        : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    {jt}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex flex-col gap-1.5">
              <span className={labelCls}>Time on</span>
              <div className="flex gap-2">
                <input
                  type="time"
                  value={form.timeOn}
                  onChange={(e) => update("timeOn", e.target.value)}
                  className={inputCls + " flex-1"}
                />
                <button
                  type="button"
                  onClick={setTimeOnNow}
                  className="px-3 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold"
                >
                  Now
                </button>
              </div>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelCls}>Time off</span>
              <div className="flex gap-2">
                <input
                  type="time"
                  value={form.timeOff}
                  onChange={(e) => update("timeOff", e.target.value)}
                  className={inputCls + " flex-1"}
                />
                <button
                  type="button"
                  onClick={setTimeOffNow}
                  className="px-3 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold"
                >
                  Now
                </button>
              </div>
            </label>
          </div>
        </section>

        {/* Client */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Client</h2>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Name</span>
            <input
              type="text"
              value={form.clientName}
              onChange={(e) => update("clientName", e.target.value)}
              autoComplete="off"
              className={inputCls}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Company (optional)</span>
            <input
              type="text"
              value={form.clientCompany}
              onChange={(e) => update("clientCompany", e.target.value)}
              autoComplete="organization"
              className={inputCls}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Email</span>
            <input
              type="email"
              inputMode="email"
              autoCapitalize="off"
              autoCorrect="off"
              value={form.clientEmail}
              onChange={(e) => update("clientEmail", e.target.value)}
              className={inputCls}
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Phone</span>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.clientPhone}
              onChange={(e) => update("clientPhone", e.target.value)}
              className={inputCls}
            />
          </label>
        </section>

        {/* Site */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Site</h2>
          <label className="flex flex-col gap-1.5">
            <span className={labelCls}>Address</span>
            <input
              type="text"
              value={form.siteAddress}
              onChange={(e) => update("siteAddress", e.target.value)}
              placeholder="Street, suburb, NSW"
              autoComplete="street-address"
              className={inputCls}
            />
          </label>
        </section>

        {/* Notes */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Notes</h2>
          <textarea
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            rows={6}
            placeholder="Observations, work performed, recommendations…"
            className={inputCls + " resize-y min-h-[140px] leading-relaxed"}
          />
        </section>

        {/* Signatures */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col gap-5">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Signatures</h2>
          <SignaturePad ref={inspectorSigRef} label="Inspector signature" />
          <SignaturePad ref={clientSigRef} label="Client signature" />
        </section>

        {/* Send options */}
        <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.sendCopyToClient}
              onChange={(e) => update("sendCopyToClient", e.target.checked)}
              className="mt-1 w-5 h-5 accent-forest-green"
            />
            <span className="text-sm text-slate-700 leading-snug">
              Email a copy to the client at <strong className="font-semibold">{form.clientEmail || "(client email)"}</strong>.
              <br />
              <span className="text-xs text-slate-500">
                Admin copies are always sent to admin@sfgeo.com.au and helay@sfgeo.com.au.
              </span>
            </span>
          </label>
        </section>

        {status === "error" && errorMessage && (
          <div className="bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm">
            {errorMessage}
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-slate-200 px-4 py-3 safe-bottom z-10">
          <div className="max-w-xl mx-auto flex gap-3">
            <button
              type="button"
              onClick={resetAll}
              className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium text-sm min-h-[52px]"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex-1 bg-forest-green text-white rounded-xl py-3 font-semibold text-base shadow-sm hover:bg-forest-green/90 transition disabled:opacity-60 min-h-[52px] flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : (
                "Send docket"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
