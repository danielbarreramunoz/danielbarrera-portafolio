"use client";

import { useState } from "react";
import Image from "next/image";

interface Shot {
  src: string;
  alt: string;
  caption: string;
}

const shots: Shot[] = [
  {
    src: "/img/nexus-rbac/login.png",
    alt: "Pantalla de inicio de sesión de Nexus RBAC",
    caption: "Login — emite JWT con tenant, roles y permisos",
  },
  {
    src: "/img/nexus-rbac/panel.png",
    alt: "Panel administrativo de Nexus RBAC con métricas",
    caption: "Panel — KPIs y vista por organización activa",
  },
  {
    src: "/img/nexus-rbac/usuarios.png",
    alt: "Gestión de usuarios de Nexus RBAC",
    caption: "Usuarios — CRUD scoped a tenantId",
  },
  {
    src: "/img/nexus-rbac/roles.png",
    alt: "Gestión de roles y asignación de permisos en Nexus RBAC",
    caption: "Roles — asignación granular de permisos",
  },
  {
    src: "/img/nexus-rbac/proyectos.png",
    alt: "Gestión de proyectos de Nexus RBAC",
    caption: "Proyectos — datos aislados por organización",
  },
];

export default function ProjectGallery() {
  const [active, setActive] = useState(1);

  const current = shots[active];

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-stone-300 bg-white">
        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-2.5">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Nexus RBAC — {current.caption}
          </p>
          <p className="font-mono text-[11px] text-stone-400">
            {active + 1} / {shots.length}
          </p>
        </div>
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={1280}
          height={800}
          className="h-auto w-full"
          priority={active === 1}
        />
      </div>
      <div
        role="tablist"
        aria-label="Capturas del proyecto Nexus RBAC"
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
    </div>
  );
}
