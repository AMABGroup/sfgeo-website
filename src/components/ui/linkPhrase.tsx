import Link from "next/link";
import type { ReactNode } from "react";

export type PhraseLink = { text: string; href: string };

const QUIET = "underline underline-offset-4 decoration-gray-300 hover:text-forest-green hover:decoration-forest-green transition-colors";

/**
 * Wraps the first occurrence of link.text inside text in a quiet in-copy link.
 * Used for cross-references that already exist in the copy ("See the cost guide."), so no words are added.
 * If the phrase is missing, the text renders unchanged.
 */
export function linkPhrase(text: string, link?: PhraseLink, className: string = QUIET): ReactNode {
  if (!link) return text;
  const i = text.indexOf(link.text);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <Link href={link.href} className={className}>{link.text}</Link>
      {text.slice(i + link.text.length)}
    </>
  );
}
