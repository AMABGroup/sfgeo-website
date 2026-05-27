import { cookies } from "next/headers";
import { getCookieName, verifyToken } from "@/lib/docketAuth";
import PasscodeGate from "./PasscodeGate";
import DocketForm from "./DocketForm";

export const dynamic = "force-dynamic";

export default async function DocketPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getCookieName())?.value;
  const authed = verifyToken(token);

  return authed ? <DocketForm /> : <PasscodeGate />;
}
