"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface OverlayGroupContextType {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

const OverlayGroupContext = createContext<OverlayGroupContextType | undefined>(undefined);

export function OverlayGroup({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <OverlayGroupContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </OverlayGroupContext.Provider>
  );
}

export function useOverlayGroup() {
  return useContext(OverlayGroupContext);
}
