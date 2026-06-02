import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookieName, verifyToken } from "@/lib/docketAuth";
import DocketForm from "../DocketForm";

export const dynamic = "force-dynamic";

export default async function NewDocketPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getCookieName())?.value;
  if (!verifyToken(token)) redirect("/docket");
  return <DocketForm />;
}
