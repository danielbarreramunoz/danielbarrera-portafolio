import BackToTop from "./components/BackToTop";

type TechBadge = string;

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stack: TechBadge[];
  keyPoints: string[];
  status: string;
  statusStyle: string;
  statusDot: string;
  demoLabel: string;
}

const coreStack: TechBadge[] = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "TypeORM",
  "Docker",
  "Jest",
  "Redis",
  "RabbitMQ",
  "OpenCode / MCP",
];

const projects: Project[] = [
  {
    number: "01",
    title: "SaaS Full Stack + Testing Riguroso",
    subtitle: "Plataforma Multi-tenant con Control de Acceso Basado en Roles (RBAC)",
    description:
      "Arquitectura modular escalable con autenticación JWT/OAuth, persistencia relacional transaccional y suite de pruebas unitarias/integración con alta cobertura.",
    stack: [
      "Next.js (App Router)",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Jest",
      "Tailwind CSS",
    ],
    keyPoints: [
      "Arquitectura modular NestJS",
      "Migraciones versionadas en TypeORM",
      "Mocks y Testing Riguroso",
    ],
    status: "Planificado / Estructura Lista",
    statusStyle:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    statusDot: "bg-emerald-400",
    demoLabel: "Slot reservado: demo + código",
  },
  {
    number: "02",
    title: "Event-Driven Microservices + Cloud/Docker",
    subtitle: "Ecosistema Distribuido de Procesamiento Asíncrono",
    description:
      "Red de microservicios desacoplados mediante mensajería por eventos, caché distribuida y orquestación con contenedores en pipelines CI/CD.",
    stack: [
      "NestJS",
      "RabbitMQ / SQS",
      "Redis",
      "PostgreSQL",
      "Docker Compose",
      "GitHub Actions",
    ],
    keyPoints: [
      "Broker de eventos",
      "Caching distribuido",
      "Orquestación Docker y CI/CD",
    ],
    status: "Planificado",
    statusStyle: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    statusDot: "bg-amber-400",
    demoLabel: "Slot reservado: demo + código",
  },
  {
    number: "03",
    title: "Cloud Application + Process Automation & AI/Webhooks",
    subtitle: "Motor de Automatización de Flujos y Webhooks Resilientes",
    description:
      "Sistema nativo en la nube para procesamiento en segundo plano, integración de agentes/APIs y manejo idempotente de webhooks.",
    stack: ["Next.js", "Node.js / NestJS", "Serverless", "Webhooks", "Cloud APIs"],
    keyPoints: [
      "Ejecución Serverless",
      "Reintentos/Idempotencia en Webhooks",
      "Observabilidad",
    ],
    status: "Planificado",
    statusStyle: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    statusDot: "bg-amber-400",
    demoLabel: "Slot reservado: demo + código",
  },
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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
        {kicker}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">
      {/* Header / Barra de Navegación (estático en móvil, fijo desde sm) */}
      <header className="z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur sm:sticky sm:top-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-lg font-bold text-white shadow-lg shadow-indigo-950"
            >
              DB
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-base font-bold tracking-tight text-slate-50">
                  Daniel Barrera
                </p>
                <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-300">
                  Senior Full Stack Developer
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2 text-xs text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>
                  Cloudflare Pages Ready{" "}
                  <code className="rounded bg-slate-800/80 px-1.5 py-0.5 font-mono text-[11px] text-emerald-300">
                    danielbarrera.pages.dev
                  </code>
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
              className="rounded-lg px-3 py-2 font-medium text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-50"
            >
              Perfil
            </a>
            <a
              href="#proyectos"
              className="rounded-lg px-3 py-2 font-medium text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-50"
            >
              Proyectos Fase 2
            </a>
            <a
              href="#competencias"
              className="rounded-lg px-3 py-2 font-medium text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-slate-50"
            >
              Competencias
            </a>
            <a
              href="#contacto"
              className="rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white shadow-md shadow-indigo-950 transition-colors hover:bg-indigo-400"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Sección Hero & Perfil Técnico */}
        <section
          id="perfil"
          className="relative scroll-mt-28 overflow-hidden border-b border-slate-800/80"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(99,102,241,0.22),transparent)]"
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                Portafolio técnico · Full Stack · Arquitectura & IA
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Ingeniería de Software, Arquitecturas Modulares{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent">
                  & Automatización con Agentes IA.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Senior Full Stack Developer especializado en desarrollo Full
                Stack moderno, transición a arquitecturas asistidas por
                IA/agentes, desacoplamiento de servicios y automatización de
                procesos. Diseño sistemas modulares, orientados a eventos y
                observables, listos para escalar en la nube.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#proyectos"
                  className="rounded-xl bg-indigo-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-950 transition-colors hover:bg-indigo-400 w-full sm:w-auto"
                >
                  Ver proyectos Fase 2
                </a>
                <a
                  href="#competencias"
                  className="rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800 w-full sm:w-auto"
                >
                  Enfoque de desarrollo
                </a>
              </div>
              {/* Badges de Tecnologías */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Stack principal
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-indigo-400/40 hover:text-indigo-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel lateral de perfil */}
            <aside className="flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  Perfil técnico
                </p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-800/70 pb-3">
                    <dt className="text-slate-500">Frontend</dt>
                    <dd className="text-right font-medium text-slate-200">
                      Next.js (App Router), React, TS, Tailwind, MUI
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800/70 pb-3">
                    <dt className="text-slate-500">Backend</dt>
                    <dd className="text-right font-medium text-slate-200">
                      NestJS, Node.js, REST, Microservicios, RBAC
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-800/70 pb-3">
                    <dt className="text-slate-500">Datos & Eventos</dt>
                    <dd className="text-right font-medium text-slate-200">
                      PostgreSQL, TypeORM, Redis, RabbitMQ, SQS
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Calidad & Cloud</dt>
                    <dd className="text-right font-medium text-slate-200">
                      Jest, Vitest, Docker, CI/CD, Cloudflare
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 to-slate-900 p-6">
                <p className="text-sm font-semibold text-indigo-200">
                  Tooling moderno
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  OpenCode · Model Context Protocol (MCP) · n8n · GitHub
                  Actions · Docker Compose · Análisis estático (TSC)
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Sección Fase 2: Proyectos */}
        <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-14 sm:px-8 sm:py-20">
          <SectionHeading
            kicker="Fase 2 · Arquitectura & Backend"
            title="Proyectos de Arquitectura & Backend"
            description="Tres tarjetas listas para Fase 2: estructura de diseño completa, stack dedicado, puntos clave de arquitectura y slots visuales reservados para demo y código."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-950/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-500">
                    PROYECTO {project.number}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${project.statusStyle}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${project.statusDot}`} />
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-50">
                  Proyecto {project.number}: {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-indigo-300">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-700/80 bg-slate-800/60 px-2 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                  {project.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[13px] leading-5 text-slate-300"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-indigo-400">
                        ▸
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex-1" />
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    {project.demoLabel}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="flex-1 cursor-pointer rounded-lg bg-slate-800/80 px-3 py-2 text-center text-xs font-semibold text-slate-400 transition-colors group-hover:bg-slate-800 group-hover:text-slate-200">
                      Demo →
                    </span>
                    <span className="flex-1 cursor-pointer rounded-lg border border-slate-700 px-3 py-2 text-center text-xs font-semibold text-slate-400 transition-colors group-hover:border-indigo-400/40 group-hover:text-indigo-200">
                      Código →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Sección Competencias & Enfoque */}
        <section
          id="competencias"
          className="scroll-mt-28 border-y border-slate-800/80 bg-slate-900/30"
        >
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
            <SectionHeading
              kicker="Competencias · Cómo trabajo"
              title="Enfoque de desarrollo moderno"
              description="Flujo asistido por agentes IA, calidad rigurosa y automatización como estándar, no como añadido."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7 transition-colors hover:border-indigo-400/40">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-lg"
                >
                  🤖
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-50">
                  Desarrollo Asistido por Agentes IA
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Orquestación de agentes con OpenCode, análisis estático y
                  generación automatizada de pruebas. Los agentes aceleran el
                  scaffolding, las migraciones y la documentación, siempre bajo
                  revisión humana y validación estricta con TypeScript.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {["OpenCode", "MCP", "n8n", "TSC estricto"].map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-indigo-400/25 bg-indigo-400/10 px-2 py-1 text-[11px] font-medium text-indigo-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7 transition-colors hover:border-indigo-400/40">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-lg"
                >
                  🧪
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-50">
                  Testing & Calidad de Código
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Estrategia de cobertura con Jest/Vitest y validación estática
                  estricta con TypeScript. Unitarias, integración con Supertest
                  y mocks bien delimitados para regresiones controladas en cada
                  release.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {["Jest", "Vitest", "Supertest", "TypeScript"].map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[11px] font-medium text-emerald-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            {/* Pipeline visual */}
            <ol className="mt-6 grid gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:grid-cols-4">
              {[
                ["01", "Diseño modular", "Dominios y contratos claros"],
                ["02", "Agentes + TSC", "Scaffolding validado"],
                ["03", "Tests verdes", "Jest / Vitest / Supertest"],
                ["04", "Ship a Cloud", "Docker · CI/CD · Cloudflare"],
              ].map(([step, title, desc]) => (
                <li key={step} className="flex gap-3">
                  <span className="font-mono text-xs font-bold text-indigo-400">
                    {step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{title}</p>
                    <p className="text-xs text-slate-500">{desc}</p>
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
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-base font-bold text-slate-50">Daniel Barrera</p>
            <p className="text-sm text-indigo-300">Senior Full Stack Developer</p>
            <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Desplegado en Cloudflare Pages · danielbarrera.pages.dev
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/danielbarreram/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-500 px-4 py-2.5 font-semibold text-white shadow-md shadow-indigo-950 transition-colors hover:bg-indigo-400"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/danielbarreramunoz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-2.5 font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
            >
              GitHub ↗
            </a>
            <a
              href="mailto:dbarrera.ap@gmail.com"
              className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-2.5 font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100"
            >
              Email ✉
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-600">
          © 2026 Daniel Barrera · Next.js (App Router) + Tailwind CSS + TypeScript
        </p>
      </footer>
      <BackToTop />
    </div>
  );
}
