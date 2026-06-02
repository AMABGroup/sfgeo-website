import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "sfgeo_docket_auth";

function getSecret(): string {
  return process.env.DOCKET_AUTH_SECRET || process.env.DOCKET_PASSCODE || "sfgeo-default-dev-secret";
}

export function getCookieName(): string {
  return COOKIE_NAME;
}

export function signToken(): string {
  const passcode = process.env.DOCKET_PASSCODE || "";
  return createHmac("sha256", getSecret()).update(passcode).digest("hex");
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const expected = signToken();
  if (token.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function verifyPasscode(input: string): boolean {
  const expected = process.env.DOCKET_PASSCODE || "";
  if (!expected || !input) return false;
  if (input.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(input), Buffer.from(expected));
  } catch {
    return false;
  }
}
