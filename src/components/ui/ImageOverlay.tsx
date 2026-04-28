"use client";

import { ReactNode } from "react";

interface ImageOverlayProps {
  children: ReactNode;
  compact?: boolean;
  hoverReveal?: boolean;
  hoverShow?: boolean;
  tracking?: string;
}

export default function ImageOverlay({ 
  children, 
  compact = false, 
  hoverReveal = false, 
  hoverShow = false,
  tracking = 'tracking-[0.2em]'
}: ImageOverlayProps) {
  let visibilityClasses = '';
  if (hoverReveal) {
    visibilityClasses = 'opacity-100 [@media(hover:hover)]:group-hover:opacity-0';
  } else if (hoverShow) {
    visibilityClasses = 'opacity-0 group-hover:opacity-100';
  }

  return (
    <div className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center ${compact ? 'p-4' : 'p-6'} transition-opacity duration-300 ease-in-out ${visibilityClasses}`}>
      <div className={`text-white uppercase ${tracking} font-semibold leading-relaxed ${compact ? 'text-[10px] sm:text-xs' : 'text-sm md:text-base'}`}>
        {children}
      </div>
    </div>
  );
}
