// The instant reply to someone who has just sent an enquiry. Plain text, in
// Alli's voice, short. The first name is the only thing the visitor typed that
// goes into it: letters only, so the form cannot be used to send someone else
// a message from an sfgeo.com.au address.

export const ACK_FROM = "Alli Atmar at SFGEO <alli@sfgeo.com.au>";
export const ACK_REPLY_TO = "alli@sfgeo.com.au";
export const ACK_SUBJECT = "Thanks for your enquiry";

/** none: no plans chosen. attached: all in the email to Alli. not_received: chosen, but they did not all arrive. */
export type AckPlans = "none" | "attached" | "not_received";

const PLANS_LINE: Record<AckPlans, string> = {
  none: "If you have plans, just reply to this email with them.",
  attached: "Your plans came through with it.",
  not_received: "Your plans did not come through, so please reply to this email with them.",
};

/** The first name if it looks like one, tidied, otherwise null. */
export function firstName(name: string): string | null {
  const word = name.trim().split(/\s+/)[0] ?? "";
  if (!/^\p{L}[\p{L}'’-]{0,29}$/u.test(word)) return null;
  return word === word.toLowerCase() ? word[0].toUpperCase() + word.slice(1) : word;
}

export function acknowledgementText(name: string, plans: AckPlans): string {
  const first = firstName(name);
  return `${first ? `Hi ${first},` : "Hello,"}

Thanks for your enquiry!

It has come straight to me and I read every one myself. You will hear from me by the next business day.

${PLANS_LINE[plans]}

Alli Atmar
Principal Engineer
Solid Foundation Geotechnical
0423 483 555
`;
}
