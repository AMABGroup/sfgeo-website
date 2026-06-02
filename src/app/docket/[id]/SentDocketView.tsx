"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteDocket, getDocket, isDraftId, type DocketRecord } from "../storage";

function formatDateLong(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export default function SentDocketView({ id }: { id: string }) {
  const router = useRouter();
  const [record, setRecord] = useState<DocketRecord | null | "loading">("loading");

  useEffect(() => {
    queueMicrotask(() => {
      const rec = getDocket(id);
      if (rec && rec.status === "draft" && isDraftId(rec.id)) {
        // If user landed on /docket/[id] for a draft, redirect to edit
        router.replace(`/docket/${encodeURIComponent(rec.id)}/edit`);
        return;
      }
      setRecord(rec);
    });
  }, [id, router]);

  if (record === "loading") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-sm text-sfgeo-label">Loading…</p>
      </div>
    );
  }

  if (!record) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-xl font-semibold text-sfgeo-ink mb-2">Docket not found</h1>
        <p className="text-sm text-sfgeo-label mb-6">
          This docket isn&apos;t in this device&apos;s register. It may have been deleted, or
          was created on another device.
        </p>
        <Link href="/docket" className="text-sm font-medium text-sfgeo-green hover:underline">
          ← Back to register
        </Link>
      </div>
    );
  }

  const d = record.data;
  const badges = [
    d.reportToFollow && "Report to follow",
    d.siteNote && "Site Note",
    d.noReportRequired && "No report required",
  ].filter(Boolean) as string[];

  const onDelete = () => {
    if (!confirm(`Remove docket ${record.id} from this device's register?`)) return;
    deleteDocket(record.id);
    router.push("/docket");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center justify-between safe-top">
        <div className="flex items-center gap-3">
          <Link href="/docket" className="text-xs font-medium text-sfgeo-green hover:underline whitespace-nowrap mr-2">
            ← Register
          </Link>
          <Image src="/docket/sfgeo-logo.png" alt="SFGEO" width={36} height={36} priority />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sfgeo-label leading-tight">Docket</div>
            <div className="text-xs font-mono text-sfgeo-ink">{record.id}</div>
          </div>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="text-xs font-medium text-red-600 hover:underline"
        >
          Remove
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-6 pb-16 flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold text-sfgeo-ink">{d.projectName || "Untitled docket"}</h1>
          <p className="text-sm text-sfgeo-label mt-1">{d.siteAddress}</p>
        </div>

        {badges.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {badges.map((b) => (
              <span key={b} className="text-[11px] font-medium uppercase tracking-wider text-sfgeo-green bg-sfgeo-green/10 rounded-full px-3 py-1">
                {b}
              </span>
            ))}
          </div>
        )}

        <Field label="Project ref"><span className="font-mono">{d.projectRef}</span> · Visit {d.visitNumber}</Field>
        <Field label="Inspection type">
          {d.jobType}{d.jobTypeDetail ? ` — ${d.jobTypeDetail}` : ""}
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Date of inspection">{formatDateLong(d.inspectionDate)}</Field>
          <Field label="Engineer | Driller">{d.inspectorName}</Field>
        </div>

        <Field label="Client">
          <div className="font-semibold">{d.clientCompany}</div>
          <div>{d.clientName}</div>
          {d.clientEmail && <div className="text-sm text-sfgeo-label">{d.clientEmail}</div>}
          {d.clientPhone && <div className="text-sm text-sfgeo-label">{d.clientPhone}</div>}
        </Field>

        {(d.siteContactName || d.siteContactPhone) && (
          <Field label="Site contact">
            {d.siteContactName}
            {d.siteContactRole ? ` · ${d.siteContactRole}` : ""}
            {d.siteContactPhone ? ` · ${d.siteContactPhone}` : ""}
          </Field>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Field label="Start">{d.timeOn || "—"}</Field>
          <Field label="End">{d.timeOff || "—"}</Field>
          <Field label="Travel">{d.travelHours ? `${d.travelHours} hrs` : "—"}</Field>
          <Field label="Total">{d.totalHours ? `${d.totalHours} hrs` : "—"}</Field>
        </div>

        {d.notes && (
          <Field label="Site notes">
            <p className="whitespace-pre-wrap leading-relaxed">{d.notes}</p>
          </Field>
        )}

        <p className="text-xs text-sfgeo-label/70 mt-4">
          Sent {record.sentAt ? new Date(record.sentAt).toLocaleString() : ""}.
          PDF is in the email that was sent to {d.clientEmail} (admin@sfgeo.com.au BCC&apos;d).
        </p>
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-100">
      <div className="text-[10px] font-bold uppercase tracking-wider text-sfgeo-label mb-1">{label}</div>
      <div className="text-sfgeo-ink text-sm">{children}</div>
    </div>
  );
}
