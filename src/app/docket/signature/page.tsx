import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookieName, verifyToken } from "@/lib/docketAuth";
import SignatureCapture from "./SignatureCapture";

export const dynamic = "force-dynamic";

export default async function SignaturePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getCookieName())?.value;
  if (!verifyToken(token)) redirect("/docket");
  return <SignatureCapture />;
}
