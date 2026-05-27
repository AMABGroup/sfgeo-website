import { NextResponse } from "next/server";
import { getCookieName, signToken, verifyPasscode } from "@/lib/docketAuth";

export async function POST(request: Request) {
  try {
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
