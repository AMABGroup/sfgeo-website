"use client";

import { ReactNode, useState, KeyboardEvent, useId, useEffect } from "react";
import { useOverlayGroup } from "./OverlayGroup";

interface ImageOverlayProps {
  children: ReactNode;
  compact?: boolean;
  hoverReveal?: boolean;
  hoverShow?: boolean;
  tracking?: string;
  isRevealed?: boolean;
  onToggle?: () => void;
}

export default function ImageOverlay({ 
  children, 
  compact = false, 
  hoverReveal = false, 
  hoverShow = false,
  tracking = 'tracking-[0.2em]',
  isRevealed: externalRevealed,
  onToggle
}: ImageOverlayProps) {
  const [internalRevealed, setInternalRevealed] = useState(false);
  const id = useId();
  const group = useOverlayGroup();

  const revealed = group 
    ? group.activeId === id 
    : (externalRevealed !== undefined ? externalRevealed : internalRevealed);

  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (onToggle) {
      onToggle();
    } else if (group) {
      group.setActiveId(group.activeId === id ? null : id);
    } else {
      setInternalRevealed(!revealed);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(e);
    }
  };

  let visibilityClasses = '';
  if (hoverReveal) {
    // Default: visible. Hover/Revealed: hidden.
    visibilityClasses = `${revealed ? 'opacity-0' : 'opacity-100'} [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-0`;
  } else if (hoverShow) {
    // Default: hidden. Hover/Revealed: visible.
    visibilityClasses = `${revealed ? 'opacity-100' : 'opacity-0'} [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100`;
  }

  return (
    <div 
      role="button"
      tabIndex={0}
      aria-pressed={revealed}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center ${compact ? 'p-4' : 'p-6'} transition-opacity duration-300 ease-in-out cursor-pointer ${visibilityClasses}`}
    >
      <div className={`text-white uppercase ${tracking} font-semibold leading-relaxed ${compact ? 'text-[10px] sm:text-xs' : 'text-sm md:text-base'}`}>
        {children}
      </div>
    </div>
  );
}
