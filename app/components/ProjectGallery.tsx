"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

interface ProjectGalleryProps {
  project: string;
  shots: Shot[];
  defaultIndex?: number;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.5;

export default function ProjectGallery({
  project,
  shots,
  defaultIndex = 0,
}: ProjectGalleryProps) {
  const [active, setActive] = useState(defaultIndex);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const viewerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    x: number;
    y: number;
    sl: number;
    st: number;
  } | null>(null);

  const current = shots[active];

  const open = useCallback(() => {
    setZoom(MIN_ZOOM);
    setLightbox(true);
  }, []);

  const close = useCallback(() => setLightbox(false), []);

  const goTo = useCallback(
    (dir: 1 | -1) => {
      setZoom(MIN_ZOOM);
      setActive((i) => (i + dir + shots.length) % shots.length);
    },
    [shots.length]
  );

  // Teclado: Escape cierra, flechas navegan
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close, goTo]);

  // Rueda del mouse: zoom (listener nativo no-pasivo para frenar el scroll)
  useEffect(() => {
    const el = viewerRef.current;
    if (!lightbox || !el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setZoom((z) => {
        const next = e.deltaY < 0 ? z + ZOOM_STEP : z - ZOOM_STEP;
        return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [lightbox]);

  // Arrastre para recorrer la imagen ampliada
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const el = viewerRef.current;
    if (!el) return;
    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      sl: el.scrollLeft,
      st: el.scrollTop,
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    const el = viewerRef.current;
    if (!drag || !el) return;
    el.scrollLeft = drag.sl - (e.clientX - drag.x);
    el.scrollTop = drag.st - (e.clientY - drag.y);
  };
  const endDrag = () => {
    dragRef.current = null;
  };

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-white">
        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-2.5">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            {project} — {current.caption}
          </p>
          <p className="font-mono text-[11px] text-stone-400">
            {active + 1} / {shots.length}
          </p>
        </div>
        <button
          type="button"
          onClick={open}
          aria-label={`Ampliar imagen: ${current.caption}`}
          title="Ver en grande"
          className="block w-full cursor-zoom-in"
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={1280}
            height={800}
            className="h-auto w-full"
          />
        </button>
        <p className="border-t border-stone-200 px-4 py-2 font-mono text-[11px] text-stone-400">
          Clic en la imagen para ampliar y ver el detalle
        </p>
      </div>
      <div
        role="tablist"
        aria-label={`Capturas de ${project}`}
        className="mt-3 grid grid-cols-5 gap-2"
      >
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Ver captura: ${shot.caption}`}
            onClick={() => setActive(i)}
            className={`overflow-hidden rounded-lg border transition-all ${
              i === active
                ? "border-orange-800 ring-2 ring-orange-800/20"
                : "border-stone-300 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={shot.src}
              alt=""
              aria-hidden="true"
              width={256}
              height={160}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada: ${current.caption}`}
          className="fixed inset-0 z-[60] flex flex-col bg-stone-950/90 p-4 sm:p-8"
          onClick={close}
        >
          <div
            className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="truncate font-mono text-xs text-stone-300">
              {project} — {current.caption} · {active + 1}/{shots.length} ·
              zoom {Math.round(zoom * 100)}%
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Imagen anterior"
                className="rounded-lg border border-stone-600 px-3 py-1.5 font-mono text-sm text-stone-200 transition-colors hover:bg-stone-800"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                aria-label="Imagen siguiente"
                className="rounded-lg border border-stone-600 px-3 py-1.5 font-mono text-sm text-stone-200 transition-colors hover:bg-stone-800"
              >
                →
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP))}
                disabled={zoom <= MIN_ZOOM}
                aria-label="Alejar"
                className="rounded-lg border border-stone-600 px-3 py-1.5 font-mono text-sm text-stone-200 transition-colors hover:bg-stone-800 disabled:opacity-40"
              >
                −
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP))}
                disabled={zoom >= MAX_ZOOM}
                aria-label="Acercar"
                className="rounded-lg border border-stone-600 px-3 py-1.5 font-mono text-sm text-stone-200 transition-colors hover:bg-stone-800 disabled:opacity-40"
              >
                +
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar vista ampliada"
                className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-200"
              >
                Cerrar ✕
              </button>
            </div>
          </div>
          <div
            ref={viewerRef}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="mx-auto mt-4 min-h-0 w-full max-w-6xl flex-1 cursor-grab overflow-auto rounded-xl border border-stone-700 bg-stone-900 active:cursor-grabbing"
          >
            <div
              className="flex min-h-full touch-none select-none"
              style={{
                alignItems: "safe center",
                justifyContent: "safe center",
              }}
            >
              <div
                style={{ width: `${zoom * 100}%` }}
                className="shrink-0 motion-safe:transition-[width]"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1920}
                  height={1200}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
          <p className="mx-auto mt-3 max-w-6xl font-mono text-[11px] text-stone-400">
            Rueda del mouse: zoom · arrastra para recorrer · ← → para navegar ·
            Esc o clic fuera para cerrar
          </p>
        </div>
      )}
    </div>
  );
}
