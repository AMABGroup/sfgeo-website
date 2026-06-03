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
  // We keep the last two points so we can draw a quadratic curve through them,
  // which removes the segmented look of straight-line `lineTo` segments —
  // especially noticeable with an Apple Pencil on retina screens.
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const prevRef = useRef<{ x: number; y: number } | null>(null);
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

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#0a0a0a";
      ctx.imageSmoothingEnabled = true;
    };
    setupCanvas();

    // Re-prepare on resize/orientation change so strokes stay sharp
    const onResize = () => setupCanvas();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pointAt = (e: PointerEvent | { clientX: number; clientY: number }) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const midpoint = (a: { x: number; y: number }, b: { x: number; y: number }) => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  });

  const drawSegment = (p: { x: number; y: number }) => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const last = lastRef.current;
    const prev = prevRef.current;
    if (!last) {
      // First point in a new stroke — draw a dot so a tap registers
      ctx.beginPath();
      ctx.arc(p.x, p.y, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#0a0a0a";
      ctx.fill();
      prevRef.current = null;
      lastRef.current = p;
      return;
    }
    // Quadratic Bezier from the midpoint of (prev, last) through last to the
    // midpoint of (last, p). Smooths the stroke as new points arrive.
    if (prev) {
      const startMid = midpoint(prev, last);
      const endMid = midpoint(last, p);
      ctx.beginPath();
      ctx.moveTo(startMid.x, startMid.y);
      ctx.quadraticCurveTo(last.x, last.y, endMid.x, endMid.y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
    prevRef.current = last;
    lastRef.current = p;
  };

  const start = (e: React.PointerEvent) => {
    e.preventDefault();
    drawingRef.current = true;
    prevRef.current = null;
    lastRef.current = null;
    const p = pointAt(e.nativeEvent);
    drawSegment(p);
    canvasRef.current?.setPointerCapture(e.pointerId);
    if (isEmpty) setIsEmpty(false);
  };

  const move = (e: React.PointerEvent) => {
    if (!drawingRef.current) return;
    e.preventDefault();
    // Apple Pencil and many touch devices coalesce several physical samples
    // into one move event. Drain them so every sample becomes a stroke vertex.
    const native = e.nativeEvent as PointerEvent & {
      getCoalescedEvents?: () => PointerEvent[];
    };
    const events =
      typeof native.getCoalescedEvents === "function"
        ? native.getCoalescedEvents()
        : null;
    if (events && events.length > 0) {
      for (const ev of events) drawSegment(pointAt(ev));
    } else {
      drawSegment(pointAt(native));
    }
  };

  const end = (e: React.PointerEvent) => {
    drawingRef.current = false;
    // Cap the stroke cleanly: draw a small dot at the last point so the end
    // doesn't look chopped off (it was previously drawn only up to the midpoint).
    const last = lastRef.current;
    if (last) {
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(last.x, last.y);
        ctx.stroke();
      }
    }
    lastRef.current = null;
    prevRef.current = null;
    try { canvasRef.current?.releasePointerCapture(e.pointerId); } catch {}
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lastRef.current = null;
    prevRef.current = null;
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
          className="text-xs text-sfgeo-green font-medium underline-offset-2 hover:underline"
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
