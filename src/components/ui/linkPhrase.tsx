import Link from "next/link";
import type { ReactNode } from "react";

export type PhraseLink = { text: string; href: string };

const QUIET = "underline underline-offset-4 decoration-gray-300 hover:text-forest-green hover:decoration-forest-green transition-colors";

/**
 * Wraps the first occurrence of each link.text inside text in a quiet in-copy link.
 * Used for cross-references that already exist in the copy ("See the cost guide."), so no words are added.
 * Pass one link or several; a phrase that is missing, or that overlaps an earlier one, is left as plain text.
 */
export function linkPhrase(text: string, link?: PhraseLink | PhraseLink[], className: string = QUIET): ReactNode {
  if (!link) return text;
  const found = (Array.isArray(link) ? link : [link])
    .map((l) => ({ ...l, at: text.indexOf(l.text) }))
    .filter((l) => l.at >= 0)
    .sort((a, b) => a.at - b.at);
  if (!found.length) return text;
  const out: ReactNode[] = [];
  let pos = 0;
  for (const l of found) {
    if (l.at < pos) continue;
    out.push(text.slice(pos, l.at));
    out.push(<Link key={l.at} href={l.href} className={className}>{l.text}</Link>);
    pos = l.at + l.text.length;
  }
  out.push(text.slice(pos));
  return <>{out}</>;
}
