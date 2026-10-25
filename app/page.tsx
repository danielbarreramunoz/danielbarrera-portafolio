import BackToTop from "./components/BackToTop";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import ProjectGallery from "./components/ProjectGallery";

const coreStack: string[] = [
  "TypeScript",
  "NestJS 12",
  "Next.js 16.4",
  "React 19",
  "PostgreSQL",
  "TypeORM 1.1",
  "JWT + RBAC",
  "Vitest",
  "Docker",
];

const backendStack: string[] = [
  "NestJS 12 modular",
  "TypeORM 1.1 + pg",
  "passport-jwt + bcrypt",
  "class-validator",
  "Vitest + Supertest",
];

const frontendStack: string[] = [
  "Next.js App Router",
  "React 19 + Context",
  "Tailwind CSS 4",
  "Componentes propios",
  "Vitest + RTL",
];

const retos: string[] = [
  "Aislamiento multi-tenant estricto: todo recurso scoped a tenantId en servicios, DTOs y consultas TypeORM.",
  "Autorización en dos capas: JwtAuthGuard global + RolesGuard / PermissionsGuard con decoradores @Roles() y @Permissions().",
  "Dashboard con rutas protegidas, switcher de organización, KPIs y CRUD de usuarios, roles y proyectos con tests en Vitest.",
];

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-800">
        {kicker}
      </p>
      <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-stone-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-stone-800 antialiased">
      {/* Header */}
      <header className="z-50 border-b border-stone-200 bg-[#faf9f6]/90 backdrop-blur sm:sticky sm:top-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-900 font-mono text-sm font-bold text-[#faf9f6]"
            >
              DB
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-base font-bold tracking-tight text-stone-900">
                  Daniel Barrera
                </p>
                <span className="rounded-full border border-stone-300 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-stone-700">
                  Senior Full Stack Developer
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-stone-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-600 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                <span className="font-mono">
                  Disponible · SaaS / NestJS / Next.js
                </span>
              </div>
            </div>
          </div>
          <nav
            aria-label="Navegación principal"
            className="flex flex-wrap items-center gap-2 text-sm"
          >
            <a
              href="#perfil"
              className="rounded-lg px-3 py-2 font-medium text-stone-600 transition-colors hover:bg-stone-200/70 hover:text-stone-900"
            >
              Perfil
            </a>
            <a
              href="#proyectos"
              className="rounded-lg px-3 py-2 font-medium text-stone-600 transition-colors hover:bg-stone-200/70 hover:text-stone-900"
            >
              Proyectos
            </a>
            <a
              href="#competencias"
              className="rounded-lg px-3 py-2 font-medium text-stone-600 transition-colors hover:bg-stone-200/70 hover:text-stone-900"
            >
              Competencias
            </a>
            <a
              href="#contacto"
              className="rounded-lg bg-stone-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-stone-700"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="perfil"
          className="paper-grain relative scroll-mt-28 overflow-hidden border-b border-stone-200"
        >
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1 font-mono text-xs text-stone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-800" />
                SaaS multi-tenant · NestJS · Next.js
              </p>
              <h1 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
                Senior Full Stack Developer{" "}
                <span className="italic text-orange-900">
                  &amp; Software Architect.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                Especializado en plataformas SaaS multi-tenant, arquitecturas
                escalables en NestJS / Next.js y optimización de flujos de
                ingeniería con agentes de IA. Diseño sistemas modulares con
                autorización granular y calidad verificada con tests.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#proyectos"
                  className="w-full rounded-xl bg-stone-900 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-stone-700 sm:w-auto"
                >
                  Ver caso de estudio
                </a>
                <a
                  href="https://github.com/danielbarreramunoz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl border border-stone-300 bg-white px-5 py-3 text-center text-sm font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100 sm:w-auto"
                >
                  GitHub ↗
                </a>
              </div>
              <div className="mt-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Stack principal
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-stone-300 bg-white px-3 py-1.5 font-mono text-xs text-stone-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <div className="rounded-2xl border border-stone-300 bg-white p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-orange-800">
                  Perfil técnico
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-stone-200 pb-3">
                    <dt className="text-stone-500">Frontend</dt>
                    <dd className="text-right font-medium text-stone-800">
                      Next.js 16.4, React 19, Tailwind 4
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-stone-200 pb-3">
                    <dt className="text-stone-500">Backend</dt>
                    <dd className="text-right font-medium text-stone-800">
                      NestJS 12, REST, JWT, RBAC
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-stone-200 pb-3">
                    <dt className="text-stone-500">Datos &amp; Auth</dt>
                    <dd className="text-right font-medium text-stone-800">
                      PostgreSQL, TypeORM, bcrypt
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-stone-500">Calidad</dt>
                    <dd className="text-right font-medium text-stone-800">
                      Vitest, Supertest, TSC estricto
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl border border-stone-900 bg-stone-900 p-6 text-stone-200">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  Cómo trabajo
                </p>
                <p className="mt-2 text-sm leading-6">
                  Contratos claros por módulo, migraciones versionadas y tests
                  en verde antes de cada release. Los agentes de IA aceleran el
                  scaffolding; la revisión humana decide el merge.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Proyecto destacado */}
        <section
          id="proyectos"
          className="mx-auto max-w-6xl scroll-mt-28 px-6 py-14 sm:px-8 sm:py-20"
        >
          <SectionHeading
            kicker="Caso de estudio · Fullstack TypeScript"
            title="Nexus RBAC — SaaS multi-tenant con RBAC granular"
            description="Plataforma con organizaciones, usuarios, roles, permisos y proyectos. API NestJS + PostgreSQL con auth JWT y dashboard Next.js con rutas protegidas y switcher de organización."
          />

          <article className="mt-10 overflow-hidden rounded-2xl border border-stone-300 bg-white">
            <div className="flex flex-col gap-3 border-b border-stone-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700/30 bg-emerald-700/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Funcional · Código en GitHub
                </span>
                <span className="font-mono text-[11px] text-stone-500">
                  Monorepo: nexus-rbac-backend + nexus-rbac-front
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href="https://github.com/danielbarreramunoz/nexus-rbac-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-stone-900 px-3 py-2 font-semibold text-white transition-colors hover:bg-stone-700"
                >
                  Código Backend →
                </a>
                <a
                  href="https://github.com/danielbarreramunoz/nexus-rbac-front"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-stone-300 px-3 py-2 font-semibold text-stone-800 transition-colors hover:border-stone-500"
                >
                  Código Frontend →
                </a>
              </div>
            </div>

            <div className="grid gap-8 px-6 py-6 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h3 className="font-display text-lg font-bold text-stone-900">
                  Retos técnicos resueltos
                </h3>
                <ul className="mt-4 space-y-3">
                  {retos.map((reto) => (
                    <li
                      key={reto}
                      className="flex items-start gap-2 text-sm leading-6 text-stone-700"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-orange-800">
                        ▸
                      </span>
                      {reto}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                      Backend
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {backendStack.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-stone-200 bg-[#faf9f6] px-2 py-1 font-mono text-[11px] text-stone-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                      Frontend
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {frontendStack.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-stone-200 bg-[#faf9f6] px-2 py-1 font-mono text-[11px] text-stone-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 rounded-xl border border-dashed border-stone-300 bg-[#faf9f6] p-4 font-mono text-[11px] leading-5 text-stone-500">
                  Sin demo pública aún: el backend requiere PostgreSQL y
                  configuración local. El código incluye seed/demo y suites
                  Vitest en ambos repos.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ProjectGallery />
                <ArchitectureDiagram />
              </div>
            </div>
          </article>
        </section>

        {/* Competencias */}
        <section
          id="competencias"
          className="scroll-mt-28 border-y border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
            <SectionHeading
              kicker="Competencias · Cómo trabajo"
              title="Enfoque de desarrollo moderno"
              description="Modularidad, autorización explícita y tests como estándar en cada entrega."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-stone-300 bg-[#faf9f6] p-7 transition-colors hover:border-orange-800/40">
                <p className="font-mono text-xs font-bold text-orange-800">
                  01
                </p>
                <h3 className="font-display mt-2 text-lg font-bold text-stone-900">
                  Arquitectura modular y RBAC
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Módulos NestJS por dominio (auth, users, tenants, roles,
                  permissions, projects) con guards y decoradores. En frontend,
                  grupos de rutas y contexto de tenant para aislar cada
                  organización.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {["NestJS", "Guards", "TypeORM", "App Router"].map(
                    (item) => (
                      <li
                        key={item}
                        className="rounded-md border border-orange-800/25 bg-orange-800/10 px-2 py-1 font-mono text-[11px] text-orange-900"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </article>
              <article className="rounded-2xl border border-stone-300 bg-[#faf9f6] p-7 transition-colors hover:border-emerald-700/40">
                <p className="font-mono text-xs font-bold text-emerald-800">
                  02
                </p>
                <h3 className="font-display mt-2 text-lg font-bold text-stone-900">
                  Testing &amp; Calidad de Código
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Vitest en ambos repos, Supertest para endpoints, Testing
                  Library en UI y TypeScript estricto. Migraciones versionadas y
                  validación con DTOs en cada borde.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {["Vitest", "Supertest", "RTL", "TSC"].map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-emerald-700/25 bg-emerald-700/10 px-2 py-1 font-mono text-[11px] text-emerald-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <ol className="mt-6 grid gap-3 rounded-2xl border border-stone-300 bg-[#faf9f6] p-6 sm:grid-cols-4">
              {[
                ["01", "Diseño modular", "Dominios y contratos claros"],
                ["02", "Auth + tenant", "JWT con roles y tenantId"],
                ["03", "Tests verdes", "Vitest / Supertest / RTL"],
                ["04", "Ship con Docker", "Compose + CI + seed demo"],
              ].map(([step, title, desc]) => (
                <li key={step} className="flex gap-3">
                  <span className="font-mono text-xs font-bold text-orange-800">
                    {step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">
                      {title}
                    </p>
                    <p className="text-xs text-stone-500">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contacto"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-10 sm:px-8"
      >
        <div className="flex flex-col gap-6 rounded-2xl border border-stone-300 bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-base font-bold text-stone-900">
              Daniel Barrera
            </p>
            <p className="font-mono text-xs text-orange-800">
              Senior Full Stack Developer
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs text-stone-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-600 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Desplegado en Cloudflare Pages · danielbarrera.pages.dev
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/danielbarreram/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-stone-900 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-stone-700"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/danielbarreramunoz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 font-semibold text-stone-700 transition-colors hover:border-stone-500 hover:text-stone-900"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:dbarrera.ap@gmail.com"
              className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 font-semibold text-stone-700 transition-colors hover:border-stone-500 hover:text-stone-900"
            >
              Email ✉
            </a>
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-xs text-stone-400">
          © 2026 Daniel Barrera · Next.js + TypeScript · Nexus RBAC
        </p>
      </footer>
      <BackToTop />
    </div>
  );
}
