"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  type DocketRecord,
  deleteDocket,
  loadDockets,
} from "./storage";

function formatRelative(ms: number): string {
  const diff = Date.now() - ms;
  const min = Math.floor(diff / 60_000);
  if (min < 1) return "just now";
  if (min < 60) return `${min}m ago`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 14) return `${d}d ago`;
  return new Date(ms).toLocaleDateString("en-AU", { day: "numeric", month: "short" });
}

function statusBadges(d: DocketRecord): string[] {
  const out: string[] = [];
  if (d.data.reportToFollow) out.push("Report to follow");
  if (d.data.siteNote) out.push("Site Note");
  if (d.data.noReportRequired) out.push("No report required");
  return out;
}

export default function Register() {
  const router = useRouter();
  const [records, setRecords] = useState<DocketRecord[]>([]);
  const [hasEngineerSig, setHasEngineerSig] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    queueMicrotask(() => {
      try {
        setRecords(loadDockets());
        setHasEngineerSig(!!localStorage.getItem("sfgeo_engineer_signature_v1"));
      } catch {}
    });
  }, []);

  const logout = async () => {
    await fetch("/api/docket/auth", { method: "DELETE" });
    router.refresh();
  };

  const { drafts, sent } = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? records.filter((r) => {
          const fields = [
            r.data.projectRef,
            r.data.projectName,
            r.data.siteAddress,
            r.data.clientCompany,
            r.data.clientName,
            r.id,
          ].join(" ").toLowerCase();
          return fields.includes(q);
        })
      : records;

    const drafts = filtered
      .filter((r) => r.status === "draft")
      .sort((a, b) => b.updatedAt - a.updatedAt);
    const sent = filtered
      .filter((r) => r.status === "sent")
      .sort((a, b) => (b.sentAt ?? 0) - (a.sentAt ?? 0));
    return { drafts, sent };
  }, [records, query]);

  const onDelete = (id: string) => {
    if (!confirm("Delete this docket from this device?")) return;
    deleteDocket(id);
    setRecords(loadDockets());
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center justify-between safe-top">
        <div className="flex items-center gap-3">
          <Image src="/docket/sfgeo-logo.png" alt="SFGEO" width={36} height={36} priority />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sfgeo-label leading-tight">SFGEO</div>
            <div className="text-xs font-mono text-sfgeo-ink">Docket Book</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/docket/signature" className="text-xs font-medium text-sfgeo-green hover:underline whitespace-nowrap">
            {hasEngineerSig ? "Signature ✓" : "Set signature"}
          </Link>
          <button type="button" onClick={logout} className="text-xs font-medium text-sfgeo-green hover:underline">
            Lock
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-6 pb-32 flex flex-col gap-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-sfgeo-ink">Dockets</h1>
            <p className="text-sm text-sfgeo-label mt-1">
              {records.length === 0
                ? "Your register is empty — start a new docket below."
                : `${records.length} docket${records.length === 1 ? "" : "s"} on this device.`}
            </p>
          </div>
          <Link
            href="/docket/new"
            className="bg-sfgeo-green text-white rounded-xl px-5 py-3 font-semibold shadow-sm hover:bg-sfgeo-green/90 transition min-h-[48px] flex items-center"
          >
            + New docket
          </Link>
        </div>

        {records.length > 0 && (
          <input
            type="search"
            placeholder="Search by project ref, name, site or client…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-sfgeo-ink outline-none focus:border-sfgeo-green focus:ring-2 focus:ring-sfgeo-green/15"
          />
        )}

        {drafts.length > 0 && (
          <section className="flex flex-col gap-3">
            <h2 className="text-[11px] font-bold tracking-wider uppercase text-sfgeo-label">Drafts</h2>
            <ul className="flex flex-col gap-2">
              {drafts.map((d) => (
                <li key={d.id}>
                  <DraftRow record={d} onDelete={() => onDelete(d.id)} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="flex flex-col gap-3">
          <h2 className="text-[11px] font-bold tracking-wider uppercase text-sfgeo-label">Sent</h2>
          {sent.length === 0 ? (
            <p className="text-sm text-sfgeo-label/80 italic py-2">
              {records.length === 0 ? "No dockets sent yet." : "No sent dockets match your search."}
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {sent.map((d) => (
                <li key={d.id}>
                  <SentRow record={d} onDelete={() => onDelete(d.id)} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

function DraftRow({ record, onDelete }: { record: DocketRecord; onDelete: () => void }) {
  const projectRef = record.data.projectRef || "—";
  const projectName = record.data.projectName || "Untitled docket";
  const site = record.data.siteAddress;
  return (
    <div className="bg-white rounded-xl border border-amber-200 shadow-sm hover:border-amber-300 transition flex items-center justify-between">
      <Link href={`/docket/${encodeURIComponent(record.id)}/edit`} className="flex-1 px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5">Draft</span>
          <span className="text-xs font-mono text-sfgeo-label">{projectRef}</span>
          <span className="text-xs text-sfgeo-label/70 ml-auto">{formatRelative(record.updatedAt)}</span>
        </div>
        <div className="text-sm font-semibold text-sfgeo-ink truncate">{projectName}</div>
        {site && <div className="text-xs text-sfgeo-label truncate mt-0.5">{site}</div>}
      </Link>
      <button
        type="button"
        onClick={onDelete}
        className="px-4 py-3 text-xs text-slate-400 hover:text-red-600"
        aria-label="Delete draft"
      >
        ✕
      </button>
    </div>
  );
}

function SentRow({ record, onDelete }: { record: DocketRecord; onDelete: () => void }) {
  const projectName = record.data.projectName || "Untitled docket";
  const site = record.data.siteAddress;
  const badges = statusBadges(record);
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition flex items-center justify-between">
      <Link href={`/docket/${encodeURIComponent(record.id)}`} className="flex-1 px-4 py-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono font-semibold text-sfgeo-ink">{record.id}</span>
          <span className="text-xs text-sfgeo-label/70 ml-auto">{record.sentAt ? formatRelative(record.sentAt) : ""}</span>
        </div>
        <div className="text-sm font-semibold text-sfgeo-ink truncate">{projectName}</div>
        {site && <div className="text-xs text-sfgeo-label truncate mt-0.5">{site}</div>}
        {badges.length > 0 && (
          <div className="flex gap-1.5 mt-1.5 flex-wrap">
            {badges.map((b) => (
              <span key={b} className="text-[10px] uppercase tracking-wider text-sfgeo-green bg-sfgeo-green/10 rounded px-1.5 py-0.5">
                {b}
              </span>
            ))}
          </div>
        )}
      </Link>
      <button
        type="button"
        onClick={onDelete}
        className="px-4 py-3 text-xs text-slate-400 hover:text-red-600"
        aria-label="Delete from register"
      >
        ✕
      </button>
    </div>
  );
}
