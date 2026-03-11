"use client";

import Link from "next/link";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

export default function ContactBubble() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 bg-forest-green text-white p-4 rounded-full shadow-lg hover:bg-forest-green/90 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact Us"
    >
      <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-slate-black text-white text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Initiate a Dialogue
      </span>
    </Link>
  );
}
