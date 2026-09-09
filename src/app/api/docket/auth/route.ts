import { NextResponse } from "next/server";
import { getCookieName, signToken, verifyPasscode } from "@/lib/docketAuth";
import { clientIp, rateLimited } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    // Five attempts per ten minutes per address, so a short passcode cannot be brute-forced.
    if (rateLimited(`docket-auth:${clientIp(request)}`, 5, 10 * 60_000)) {
      return NextResponse.json({ error: "Too many attempts. Try again in ten minutes." }, { status: 429 });
    }
    const { passcode } = await request.json();
    if (typeof passcode !== "string" || !verifyPasscode(passcode)) {
      return NextResponse.json({ error: "Incorrect passcode" }, { status: 401 });
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set(getCookieName(), signToken(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(getCookieName(), "", { path: "/", maxAge: 0 });
  return response;
}
