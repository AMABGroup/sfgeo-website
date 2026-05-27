"use client";

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";

export type SignaturePadHandle = {
  clear: () => void;
  getDataUrl: () => string | null;
  isEmpty: () => boolean;
};

type Props = {
  label: string;
};

const SignaturePad = forwardRef<SignaturePadHandle, Props>(function SignaturePad(
  { label },
  ref
) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawingRef = useRef(false);
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useImperativeHandle(ref, () => ({
    clear() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setIsEmpty(true);
    },
    getDataUrl() {
      const canvas = canvasRef.current;
      if (!canvas || isEmpty) return null;
      return canvas.toDataURL("image/png");
    },
    isEmpty() {
      return isEmpty;
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#0a0a0a";
  }, []);

  const pointAt = (e: PointerEvent | React.PointerEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const start = (e: React.PointerEvent) => {
    e.preventDefault();
    drawingRef.current = true;
    lastRef.current = pointAt(e);
    canvasRef.current?.setPointerCapture(e.pointerId);
  };

  const move = (e: React.PointerEvent) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !lastRef.current) return;
    const p = pointAt(e);
    ctx.beginPath();
    ctx.moveTo(lastRef.current.x, lastRef.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastRef.current = p;
    if (isEmpty) setIsEmpty(false);
  };

  const end = (e: React.PointerEvent) => {
    drawingRef.current = false;
    lastRef.current = null;
    try { canvasRef.current?.releasePointerCapture(e.pointerId); } catch {}
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setIsEmpty(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500">
          {label}
        </span>
        <button
          type="button"
          onClick={clear}
          className="text-xs text-forest-green font-medium underline-offset-2 hover:underline"
        >
          Clear
        </button>
      </div>
      <div
        className="relative bg-white border border-slate-200 rounded-xl overflow-hidden"
        style={{ touchAction: "none" }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerLeave={end}
          onPointerCancel={end}
          className="block w-full"
          style={{ height: "160px", touchAction: "none" }}
        />
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-slate-300 text-sm">Sign here</span>
          </div>
        )}
      </div>
    </div>
  );
});

export default SignaturePad;
