const steps = [
  {
    id: "web",
    title: "Next.js 16.4",
    desc: "App Router (auth) / (dashboard) · rutas protegidas · tenant-switcher",
  },
  {
    id: "api",
    title: "NestJS 12 API",
    desc: "JwtAuthGuard → RolesGuard / PermissionsGuard · DTOs con class-validator",
  },
  {
    id: "db",
    title: "PostgreSQL + TypeORM",
    desc: "User · Tenant · Role · Permission · Project · todo scoped a tenantId",
  },
];

export default function ArchitectureDiagram() {
  return (
    <figure
      aria-label="Diagrama de arquitectura de Nexus RBAC"
      className="rounded-2xl border border-stone-300 bg-white p-5 sm:p-6"
    >
      <figcaption className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        Arquitectura — flujo de una petición
      </figcaption>
      <ol className="mt-4 grid gap-3 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.id}
            className="relative rounded-xl border border-stone-200 bg-[#faf9f6] p-4"
          >
            <p className="font-mono text-xs font-bold text-orange-800">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-1 text-sm font-bold text-stone-900">{step.title}</p>
            <p className="mt-1 text-xs leading-5 text-stone-600">{step.desc}</p>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border border-stone-300 bg-white text-[11px] text-stone-500 sm:flex"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 border-t border-dashed border-stone-300 pt-3 font-mono text-[11px] leading-5 text-stone-500">
        POST /auth/login → JWT (userId, tenantId, roles, permissions) · cada
        recurso valida tenantId · frontend guarda sesión en auth-context
      </p>
    </figure>
  );
}
