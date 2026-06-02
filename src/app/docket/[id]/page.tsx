import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookieName, verifyToken } from "@/lib/docketAuth";
import SentDocketView from "./SentDocketView";

export const dynamic = "force-dynamic";

export default async function DocketViewPage({ params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies();
  const token = cookieStore.get(getCookieName())?.value;
  if (!verifyToken(token)) redirect("/docket");
  const { id } = await params;
  return <SentDocketView id={decodeURIComponent(id)} />;
}
