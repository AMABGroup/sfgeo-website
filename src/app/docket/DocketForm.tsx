"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SignaturePad, { type SignaturePadHandle } from "./SignaturePad";
import {
  type StoredDocketData,
  deleteDocket,
  emptyData,
  getDocket,
  loadDockets,
  markSent,
  newDraftId,
  upsertDraft,
} from "./storage";

type JobType = "Drilling" | "Site inspection" | "Other";

type FormState = StoredDocketData;

type ProjectRecord = {
  projectRef: string;
  projectName: string;
  clientName?: string;
  clientCompany?: string;
  clientEmail?: string;
  clientPhone?: string;
  siteAddress?: string;
  lastUsed: number;
};

const JOB_TYPES: JobType[] = ["Drilling", "Site inspection", "Other"];
const MIN_TOTAL_HOURS = 4;

const INSPECTOR_KEY = "sfgeo_docket_inspector_v1";
const PROJECTS_KEY = "sfgeo_docket_projects_v1";
const ENGINEER_SIG_KEY = "sfgeo_engineer_signature_v1";

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

function hhmmToMinutes(s: string): number | null {
  if (!/^\d{1,2}:\d{2}$/.test(s)) return null;
  const [h, m] = s.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

function computeSuggestedTotal(timeOn: string, timeOff: string, travelHours: string): number {
  const onMin = hhmmToMinutes(timeOn);
  const offMin = hhmmToMinutes(timeOff);
  let onSite = 0;
  if (onMin !== null && offMin !== null) {
    const delta = offMin - onMin;
    onSite = delta > 0 ? delta / 60 : 0;
  }
  const travel = parseFloat(travelHours) || 0;
  const raw = onSite + travel;
  return Math.max(MIN_TOTAL_HOURS, Math.round(raw * 4) / 4);
}

// Project ref: accept "SFG-2026-037" or "SFG-2026-P037" (P stage),
// normalise by dropping the P since dockets are raised on accepted work.
function normaliseProjectRef(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/^SFG-(\d{4})-P(\d+)$/, "SFG-$1-$2");
}

function isValidProjectRef(raw: string): boolean {
  return /^SFG-\d{4}-\d{2,4}$/.test(raw);
}

function loadProjects(): ProjectRecord[] {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as ProjectRecord[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveProject(record: ProjectRecord) {
  try {
    const list = loadProjects().filter((p) => p.projectRef !== record.projectRef);
    list.unshift(record);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(list.slice(0, 50)));
  } catch {}
}

function freshForm(): FormState {
  return { ...emptyData(), inspectionDate: todayIsoDate(), totalHours: String(MIN_TOTAL_HOURS) };
}

type Status = "idle" | "submitting" | "success" | "error";

type DocketFormProps = { draftId?: string };

export default function DocketForm({ draftId: incomingDraftId }: DocketFormProps = {}) {
  const router = useRouter();
  // The id we autosave to. For "new" we generate one on first mount.
  const [draftId, setDraftId] = useState<string>(() => incomingDraftId ?? "");
  const [form, setForm] = useState<FormState>(() => freshForm());
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submittedDocketId, setSubmittedDocketId] = useState<string>("");
  const [totalEdited, setTotalEdited] = useState(false);
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [refSuggestionsOpen, setRefSuggestionsOpen] = useState(false);
  const [nameSuggestionsOpen, setNameSuggestionsOpen] = useState(false);
  const [engineerSig, setEngineerSig] = useState<string | null>(null);
  const siteContactSigRef = useRef<SignaturePadHandle | null>(null);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        // Run legacy migration + populate project autocomplete list
        loadDockets();
        setProjects(loadProjects());
        setEngineerSig(localStorage.getItem(ENGINEER_SIG_KEY));

        if (incomingDraftId) {
          // Resume an existing draft
          const rec = getDocket(incomingDraftId);
          if (rec && rec.status === "draft") {
            setDraftId(incomingDraftId);
            setForm(rec.data);
            return;
          }
          // If the id is unknown or already sent, fall through to "new draft"
        }
        // Brand-new draft — generate id and pre-fill inspector name if known
        const id = newDraftId();
        setDraftId(id);
        const savedInspector = localStorage.getItem(INSPECTOR_KEY) || "";
        if (savedInspector) setForm((f) => ({ ...f, inspectorName: savedInspector }));
      } catch {}
    });
  }, [incomingDraftId]);

  useEffect(() => {
    if (status === "success" || !draftId) return;
    upsertDraft(draftId, form);
  }, [form, status, draftId]);

  const suggestedTotal = useMemo(
    () => computeSuggestedTotal(form.timeOn, form.timeOff, form.travelHours),
    [form.timeOn, form.timeOff, form.travelHours]
  );

  useEffect(() => {
    if (totalEdited) return;
    queueMicrotask(() => {
      const next = String(suggestedTotal);
      setForm((f) => (f.totalHours === next ? f : { ...f, totalHours: next }));
    });
  }, [suggestedTotal, totalEdited]);

  const docketId = useMemo(() => {
    const ref = normaliseProjectRef(form.projectRef);
    const visit = (form.visitNumber || "01").padStart(2, "0");
    return isValidProjectRef(ref) ? `${ref}-${visit}` : "—";
  }, [form.projectRef, form.visitNumber]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const setTimeOnNow = () => update("timeOn", nowHHMM());
  const setTimeOffNow = () => update("timeOff", nowHHMM());

  const enforceTotalMin = (raw: string) => {
    setTotalEdited(true);
    const num = parseFloat(raw);
    if (Number.isFinite(num) && num < MIN_TOTAL_HOURS) {
      update("totalHours", String(MIN_TOTAL_HOURS));
    } else {
      update("totalHours", raw);
    }
  };

  const refMatches = useMemo(() => {
    const q = form.projectRef.toUpperCase();
    if (!q || q.length < 3) return [];
    return projects
      .filter((p) => p.projectRef.toUpperCase().includes(q))
      .slice(0, 5);
  }, [form.projectRef, projects]);

  const nameMatches = useMemo(() => {
    const q = form.projectName.toLowerCase();
    if (!q || q.length < 2) return [];
    return projects
      .filter((p) => p.projectName.toLowerCase().includes(q))
      .slice(0, 5);
  }, [form.projectName, projects]);

  const applyProject = (p: ProjectRecord) => {
    setForm((f) => ({
      ...f,
      projectRef: p.projectRef,
      projectName: p.projectName,
      clientName: p.clientName || f.clientName,
      clientCompany: p.clientCompany || f.clientCompany,
      clientEmail: p.clientEmail || f.clientEmail,
      clientPhone: p.clientPhone || f.clientPhone,
      siteAddress: p.siteAddress || f.siteAddress,
    }));
    setRefSuggestionsOpen(false);
    setNameSuggestionsOpen(false);
  };

  const onProjectRefBlur = () => {
    const norm = normaliseProjectRef(form.projectRef);
    if (norm !== form.projectRef) update("projectRef", norm);
    setTimeout(() => setRefSuggestionsOpen(false), 150);
  };

  const discardDraft = () => {
    if (!confirm("Discard this draft? It will be removed from this device.")) return;
    if (draftId) deleteDocket(draftId);
    router.push("/docket");
  };

  const logout = async () => {
    await fetch("/api/docket/auth", { method: "DELETE" });
    router.refresh();
  };

  const validate = (): string | null => {
    const normRef = normaliseProjectRef(form.projectRef);
    if (!isValidProjectRef(normRef)) return "Project ref must look like SFG-2026-037.";
    if (!form.projectName.trim()) return "Project name is required.";
    if (!form.inspectorName.trim()) return "Inspector name is required.";
    if (!form.clientCompany.trim()) return "Client company is required.";
    if (!form.clientName.trim()) return "Client name is required.";
    if (!form.clientEmail.trim() || !form.clientEmail.includes("@")) return "Valid client email is required.";
    if (!form.siteAddress.trim()) return "Site address is required.";
    if (!form.jobType) return "Select an inspection type.";
    if ((form.jobType === "Site inspection" || form.jobType === "Other") && !form.jobTypeDetail.trim()) {
      return form.jobType === "Site inspection"
        ? "Describe the type of inspection."
        : "Describe the job.";
    }
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

    const finalTotal = Math.max(MIN_TOTAL_HOURS, parseFloat(form.totalHours) || MIN_TOTAL_HOURS);
    const normRef = normaliseProjectRef(form.projectRef);
    const visit = (form.visitNumber || "01").padStart(2, "0");

    const payload = {
      projectRef: normRef,
      visitNumber: visit,
      docketId: `${normRef}-${visit}`,
      projectName: form.projectName,
      inspectionDate: form.inspectionDate,
      inspectorName: form.inspectorName,
      jobType: form.jobType,
      jobTypeDetail: form.jobTypeDetail,

      clientName: form.clientName,
      clientCompany: form.clientCompany,
      clientEmail: form.clientEmail,
      clientPhone: form.clientPhone,

      siteContactName: form.siteContactName,
      siteContactPhone: form.siteContactPhone,
      siteContactRole: form.siteContactRole,

      siteAddress: form.siteAddress,

      timeOn: form.timeOn,
      timeOff: form.timeOff,
      travelHours: form.travelHours,
      totalHours: String(finalTotal),

      notes: form.notes,

      reportToFollow: form.reportToFollow,
      siteNote: form.siteNote,
      noReportRequired: form.noReportRequired,

      siteContactSignature: siteContactSigRef.current?.getDataUrl() || undefined,
      engineerSignature: engineerSig || undefined,
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
        saveProject({
          projectRef: normRef,
          projectName: form.projectName,
          clientName: form.clientName,
          clientCompany: form.clientCompany,
          clientEmail: form.clientEmail,
          clientPhone: form.clientPhone,
          siteAddress: form.siteAddress,
          lastUsed: Date.now(),
        });
        const sentId = data.docketId || `${normRef}-${visit}`;
        if (draftId) markSent(draftId, sentId, form);
        setSubmittedDocketId(sentId);
        setStatus("success");
      } else {
        setErrorMessage(data.error || "Something went wrong sending the docket.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Your draft is saved on this device — try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-12 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-sfgeo-green/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-sfgeo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-sfgeo-ink mb-2">Docket sent</h1>
        <p className="text-sfgeo-label mb-1 text-sm">
          Sent to {form.clientEmail} (admin@sfgeo.com.au BCC&apos;d)
        </p>
        <p className="text-sfgeo-label/70 text-xs mb-8 font-mono">{submittedDocketId}</p>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button
            type="button"
            onClick={() => router.push("/docket")}
            className="bg-sfgeo-green text-white rounded-xl py-4 px-8 font-semibold shadow-sm hover:bg-sfgeo-green/90 transition min-h-[56px]"
          >
            Back to register
          </button>
          <button
            type="button"
            onClick={() => router.push("/docket/new")}
            className="bg-white border border-slate-200 text-sfgeo-ink rounded-xl py-4 px-8 font-semibold hover:border-slate-300 transition min-h-[56px]"
          >
            New docket
          </button>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-base text-sfgeo-ink outline-none focus:border-sfgeo-green focus:ring-2 focus:ring-sfgeo-green/15 min-h-[48px]";
  const labelCls = "text-[11px] font-bold tracking-wider uppercase text-sfgeo-label whitespace-nowrap";

  const needsJobDetail = form.jobType === "Site inspection" || form.jobType === "Other";
  const jobDetailLabel = form.jobType === "Site inspection" ? "Type of inspection" : "Describe the job";

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center justify-between safe-top">
        <div className="flex items-center gap-3">
          <Link href="/docket" className="text-xs font-medium text-sfgeo-green hover:underline whitespace-nowrap mr-2">
            ← Register
          </Link>
          <Image src="/docket/sfgeo-logo.png" alt="SFGEO" width={36} height={36} priority />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sfgeo-label leading-tight">Docket Book</div>
            <div className="text-xs font-mono text-sfgeo-ink">{docketId}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/docket/signature"
            className="text-xs font-medium text-sfgeo-green hover:underline whitespace-nowrap"
          >
            {engineerSig ? "Signature ✓" : "Set signature"}
          </Link>
          <button type="button" onClick={logout} className="text-xs font-medium text-sfgeo-green hover:underline">
            Lock
          </button>
        </div>
      </header>

      <form onSubmit={submit} className="max-w-5xl mx-auto px-4 md:px-8 py-6 pb-32 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 md:gap-6">

          {/* PROJECT */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-4">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Project</h2>
            <div className="grid grid-cols-3 gap-3">
              <label className="flex flex-col gap-1.5 col-span-2 relative">
                <span className={labelCls}>Project ref</span>
                <input
                  type="text"
                  value={form.projectRef}
                  onChange={(e) => { update("projectRef", e.target.value); setRefSuggestionsOpen(true); }}
                  onFocus={() => setRefSuggestionsOpen(true)}
                  onBlur={onProjectRefBlur}
                  placeholder="SFG-2026-037"
                  autoCapitalize="characters"
                  autoCorrect="off"
                  className={inputCls + " font-mono"}
                />
                {refSuggestionsOpen && refMatches.length > 0 && (
                  <ul className="absolute z-30 top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                    {refMatches.map((p) => (
                      <li key={p.projectRef}>
                        <button
                          type="button"
                          onMouseDown={(e) => { e.preventDefault(); applyProject(p); }}
                          className="w-full text-left px-3 py-2.5 hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                        >
                          <div className="text-sm font-mono text-sfgeo-ink">{p.projectRef}</div>
                          <div className="text-xs text-sfgeo-label truncate">{p.projectName}</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Visit no.</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.visitNumber}
                  onChange={(e) => update("visitNumber", e.target.value.replace(/\D/g, "").slice(0, 2))}
                  onBlur={(e) => update("visitNumber", e.target.value.padStart(2, "0") || "01")}
                  className={inputCls + " font-mono text-center"}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 relative">
              <span className={labelCls}>Project name</span>
              <input
                type="text"
                value={form.projectName}
                onChange={(e) => { update("projectName", e.target.value); setNameSuggestionsOpen(true); }}
                onFocus={() => setNameSuggestionsOpen(true)}
                onBlur={() => setTimeout(() => setNameSuggestionsOpen(false), 150)}
                placeholder="e.g. Proposed Secondary Dwelling — Chipping Norton"
                className={inputCls}
              />
              {nameSuggestionsOpen && nameMatches.length > 0 && (
                <ul className="absolute z-30 top-full mt-1 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  {nameMatches.map((p) => (
                    <li key={p.projectRef}>
                      <button
                        type="button"
                        onMouseDown={(e) => { e.preventDefault(); applyProject(p); }}
                        className="w-full text-left px-3 py-2.5 hover:bg-slate-50 border-b border-slate-100 last:border-b-0"
                      >
                        <div className="text-sm text-sfgeo-ink truncate">{p.projectName}</div>
                        <div className="text-xs text-sfgeo-label font-mono">{p.projectRef}</div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </label>
            <p className="text-[10px] text-sfgeo-label -mt-2">
              Docket ID: <span className="font-mono">{docketId}</span>
            </p>
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
              <span className={labelCls}>Engineer&nbsp;|&nbsp;Driller</span>
              <input
                type="text"
                value={form.inspectorName}
                onChange={(e) => update("inspectorName", e.target.value)}
                autoComplete="name"
                placeholder="Your name"
                className={inputCls}
              />
            </label>
            <fieldset className="flex flex-col gap-2">
              <legend className={labelCls + " mb-1"}>Inspection type</legend>
              <div className="grid grid-cols-3 gap-2">
                {JOB_TYPES.map((jt) => {
                  const active = form.jobType === jt;
                  return (
                    <button
                      type="button"
                      key={jt}
                      onClick={() => update("jobType", jt)}
                      className={`rounded-xl py-3 px-2 text-sm font-medium border transition min-h-[48px] ${
                        active ? "bg-sfgeo-green text-white border-sfgeo-green" : "bg-white text-slate-700 border-slate-200"
                      }`}
                    >
                      {jt}
                    </button>
                  );
                })}
              </div>
              {needsJobDetail && (
                <input
                  type="text"
                  value={form.jobTypeDetail}
                  onChange={(e) => update("jobTypeDetail", e.target.value)}
                  placeholder={jobDetailLabel + "…"}
                  className={inputCls + " mt-1"}
                />
              )}
            </fieldset>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Start</span>
                <div className="flex gap-2">
                  <input type="time" value={form.timeOn} onChange={(e) => update("timeOn", e.target.value)} className={inputCls + " flex-1"} />
                  <button type="button" onClick={setTimeOnNow} className="px-3 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold">Now</button>
                </div>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>End</span>
                <div className="flex gap-2">
                  <input type="time" value={form.timeOff} onChange={(e) => update("timeOff", e.target.value)} className={inputCls + " flex-1"} />
                  <button type="button" onClick={setTimeOffNow} className="px-3 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold">Now</button>
                </div>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Travel (hrs)</span>
                <input
                  type="number" inputMode="decimal" step="0.25" min="0"
                  value={form.travelHours}
                  onChange={(e) => update("travelHours", e.target.value)}
                  placeholder="e.g. 1.5"
                  className={inputCls}
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Total hrs (min {MIN_TOTAL_HOURS})</span>
                <input
                  type="number" inputMode="decimal" step="0.25" min={MIN_TOTAL_HOURS}
                  value={form.totalHours}
                  onChange={(e) => enforceTotalMin(e.target.value)}
                  onBlur={(e) => enforceTotalMin(e.target.value)}
                  className={inputCls + " font-semibold"}
                />
              </label>
            </div>
          </section>

          {/* SITE ADDRESS */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Site address</h2>
            <label className="flex flex-col gap-1.5">
              <span className={labelCls}>Address</span>
              <input
                type="text" value={form.siteAddress}
                onChange={(e) => update("siteAddress", e.target.value)}
                placeholder="Street, suburb, NSW"
                autoComplete="street-address"
                className={inputCls}
              />
            </label>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 md:gap-6">

          {/* CLIENT */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Client</h2>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Company</span>
                <input type="text" value={form.clientCompany} onChange={(e) => update("clientCompany", e.target.value)} autoComplete="organization" className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Name</span>
                <input type="text" value={form.clientName} onChange={(e) => update("clientName", e.target.value)} className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Email</span>
                <input type="email" inputMode="email" autoCapitalize="off" autoCorrect="off" value={form.clientEmail} onChange={(e) => update("clientEmail", e.target.value)} className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Phone</span>
                <input type="tel" inputMode="tel" autoComplete="tel" value={form.clientPhone} onChange={(e) => update("clientPhone", e.target.value)} className={inputCls} />
              </label>
            </div>
          </section>

          {/* SITE CONTACT */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Site contact</h2>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Name</span>
                <input type="text" value={form.siteContactName} onChange={(e) => update("siteContactName", e.target.value)} className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Role / position</span>
                <input
                  type="text"
                  value={form.siteContactRole}
                  onChange={(e) => update("siteContactRole", e.target.value)}
                  placeholder="e.g. Site Supervisor, Builder"
                  className={inputCls}
                />
              </label>
              <label className="flex flex-col gap-1.5 col-span-2">
                <span className={labelCls}>Phone (optional)</span>
                <input type="tel" inputMode="tel" value={form.siteContactPhone} onChange={(e) => update("siteContactPhone", e.target.value)} className={inputCls} />
              </label>
            </div>
          </section>

          {/* SITE NOTES */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Site notes</h2>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={5}
              placeholder="Findings, work performed, recommendations…"
              className={inputCls + " resize-y min-h-[112px] max-h-[160px] leading-relaxed"}
            />
          </section>

          {/* STATUS */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-2">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Report status</h2>
            <CheckboxRow checked={form.reportToFollow} onChange={(v) => update("reportToFollow", v)} label="Report to follow" />
            <CheckboxRow checked={form.siteNote} onChange={(v) => update("siteNote", v)} label="Site Note" />
            <CheckboxRow checked={form.noReportRequired} onChange={(v) => update("noReportRequired", v)} label="No report required" />
          </section>

          {/* SIGNATURE — site contact only */}
          <section className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
            <h2 className="text-sm font-bold text-sfgeo-ink uppercase tracking-wider">Site contact signature</h2>
            <SignaturePad ref={siteContactSigRef} label={form.siteContactName || "On-site signatory"} />
            <p className="text-[11px] text-sfgeo-label">
              Engineer sign-off (Alli Atmar · Director | Principal Engineer) is auto-applied to every docket.
            </p>
          </section>
        </div>

        {status === "error" && errorMessage && (
          <div className="md:col-span-2 bg-red-50 border border-red-100 text-red-700 rounded-xl px-4 py-3 text-sm">
            {errorMessage}
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-slate-200 px-4 md:px-8 py-3 safe-bottom z-10">
          <div className="max-w-5xl mx-auto flex gap-2 md:gap-3 items-center">
            <button
              type="button"
              onClick={discardDraft}
              className="px-3 py-3 rounded-xl text-red-600 text-xs font-medium hover:bg-red-50 transition min-h-[52px]"
            >
              Discard
            </button>
            <button
              type="button"
              onClick={() => router.push("/docket")}
              className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium text-sm min-h-[52px]"
            >
              Save draft
            </button>
            <button
              type="submit" disabled={status === "submitting"}
              className="flex-1 bg-sfgeo-green text-white rounded-xl py-3 font-semibold text-base shadow-sm hover:bg-sfgeo-green/90 transition disabled:opacity-60 min-h-[52px] flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </>
              ) : ("Send docket")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function CheckboxRow({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string; }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer min-h-[44px]">
      <input
        type="checkbox" checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 accent-sfgeo-green"
      />
      <span className="text-sm text-sfgeo-ink font-medium">{label}</span>
    </label>
  );
}
