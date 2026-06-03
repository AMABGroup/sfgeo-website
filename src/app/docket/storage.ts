// Client-side docket storage (multi-draft + sent register).
// Lives in localStorage on the device. No server sync (yet — planned follow-up).

export type DocketStatus = "draft" | "sent";

export type StoredDocketData = {
  projectRef: string;
  visitNumber: string;
  projectName: string;
  inspectionDate: string;
  inspectorName: string;
  jobType: string;
  jobTypeDetail: string;

  clientCompany: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;

  siteContactName: string;
  siteContactPhone: string;
  siteContactRole: string;

  // Site address — split into parts. siteAddress is the combined string
  // used by PDF/email; rebuilt from parts on submit but kept as a field
  // so legacy drafts still resolve.
  siteStreetNumber: string;
  siteStreetName: string;
  siteStreetType: string;
  siteSuburb: string;
  siteAddress: string;

  timeOn: string;
  timeOff: string;
  travelHours: string;
  totalHours: string;

  notes: string;

  reportToFollow: boolean;
  siteNote: boolean;
  noReportRequired: boolean;
};

export type DocketRecord = {
  id: string;                  // draft-* for drafts, SFG-... for sent
  status: DocketStatus;
  data: StoredDocketData;
  createdAt: number;
  updatedAt: number;
  sentAt?: number;
};

const DOCKETS_KEY = "sfgeo_dockets_v1";
const LEGACY_DRAFT_KEY = "sfgeo_docket_draft_v3";

function safeRead(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeWrite(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch {}
}
function safeRemove(key: string): void {
  try { localStorage.removeItem(key); } catch {}
}

function readAll(): Record<string, DocketRecord> {
  const raw = safeRead(DOCKETS_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, DocketRecord>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}
function writeAll(records: Record<string, DocketRecord>): void {
  safeWrite(DOCKETS_KEY, JSON.stringify(records));
}

/** One-time migration of the legacy single-draft autosave into the new register. */
function migrateLegacyOnce(): void {
  const legacy = safeRead(LEGACY_DRAFT_KEY);
  if (!legacy) return;
  try {
    const parsed = JSON.parse(legacy) as Partial<StoredDocketData>;
    // Only migrate if it looks substantive
    const hasContent =
      (parsed.projectRef && parsed.projectRef.length > 4) ||
      (parsed.projectName && parsed.projectName.length > 2) ||
      (parsed.notes && parsed.notes.length > 2);
    if (hasContent) {
      const id = newDraftId();
      const now = Date.now();
      const record: DocketRecord = {
        id,
        status: "draft",
        data: mergeData(emptyData(), parsed),
        createdAt: now,
        updatedAt: now,
      };
      const all = readAll();
      all[id] = record;
      writeAll(all);
    }
  } catch {}
  safeRemove(LEGACY_DRAFT_KEY);
}

export function emptyData(): StoredDocketData {
  return {
    projectRef: "",
    visitNumber: "01",
    projectName: "",
    inspectionDate: "",
    inspectorName: "",
    jobType: "Site inspection",
    jobTypeDetail: "",
    clientCompany: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    siteContactName: "",
    siteContactPhone: "",
    siteContactRole: "",
    siteStreetNumber: "",
    siteStreetName: "",
    siteStreetType: "",
    siteSuburb: "",
    siteAddress: "",
    timeOn: "",
    timeOff: "",
    travelHours: "",
    totalHours: "4",
    notes: "",
    reportToFollow: false,
    siteNote: false,
    noReportRequired: false,
  };
}

export function mergeData(base: StoredDocketData, patch: Partial<StoredDocketData>): StoredDocketData {
  return { ...base, ...patch };
}

export function newDraftId(): string {
  return `draft-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

/** Build a single-line site address from the split parts.
 *  Falls back to the legacy combined siteAddress field if the parts are empty. */
export function buildSiteAddress(d: Partial<StoredDocketData>): string {
  const street = [d.siteStreetNumber, d.siteStreetName, d.siteStreetType]
    .map((s) => (s || "").trim())
    .filter(Boolean)
    .join(" ");
  const suburb = (d.siteSuburb || "").trim();
  const combined = [street, suburb].filter(Boolean).join(", ");
  if (combined) return combined;
  return (d.siteAddress || "").trim();
}

/** Default project ref prefix — current year. */
export function defaultProjectRefPrefix(): string {
  return `SFG-${new Date().getFullYear()}-`;
}

export function isDraftId(id: string): boolean {
  return id.startsWith("draft-");
}

export function loadDockets(): DocketRecord[] {
  migrateLegacyOnce();
  return Object.values(readAll());
}

export function getDocket(id: string): DocketRecord | null {
  return readAll()[id] ?? null;
}

export function upsertDraft(id: string, data: StoredDocketData): DocketRecord {
  const all = readAll();
  const existing = all[id];
  const now = Date.now();
  const record: DocketRecord = existing
    ? { ...existing, data, updatedAt: now }
    : { id, status: "draft", data, createdAt: now, updatedAt: now };
  all[id] = record;
  writeAll(all);
  return record;
}

export function markSent(draftId: string, sentId: string, data: StoredDocketData): DocketRecord {
  const all = readAll();
  // Remove the draft entry if it exists
  delete all[draftId];
  const now = Date.now();
  const existing = all[sentId];
  const record: DocketRecord = {
    id: sentId,
    status: "sent",
    data,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    sentAt: now,
  };
  all[sentId] = record;
  writeAll(all);
  return record;
}

export function deleteDocket(id: string): void {
  const all = readAll();
  delete all[id];
  writeAll(all);
}
