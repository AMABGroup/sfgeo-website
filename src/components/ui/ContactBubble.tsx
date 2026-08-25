"use client";

import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactBubble() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18053070765/53SQCIy9158cEK3_r6BD",
      });
    }
  };

  return (
    <a    
      href="sms:+61423483555"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-forest-green text-white p-4 rounded-full shadow-lg hover:bg-forest-green/90 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center group lg:hidden"
      aria-label="Contact Us"
    >
      <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-black text-white text-xs font-semibold py-1.5 px-3 rounded whitespace-nowrap pointer-events-none shadow-md">
        Text SFGEO
      </span>
      <ChatBubbleLeftEllipsisIcon className="w-6 h-6 flex-shrink-0" />
    </a>
  );
}
