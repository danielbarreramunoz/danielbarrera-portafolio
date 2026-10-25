# Portafolio — Estado del proyecto

> Fuente de verdad para el asistente y el dueño. Actualizar este archivo con cada cambio (nuevo proyecto, captura, copy o sección).

## 1. Estado actual (2026-10-25)

- **Tema:** editorial claro. Fondo papel `#faf9f6`, tinta `#1c1b1a`, acento cobre `orange-800/900`. Textura `paper-grain` (puntos). Sin glows indigo/púrpura, sin look v0/Bolt.
- **Fuentes:** `Fraunces` (display serif, `font-display`) + `Geist Sans` (cuerpo) + `Geist Mono` (labels técnicas). Definidas en `app/layout.tsx`, mapeadas en `app/globals.css` vía `@theme inline`.
- **Idioma:** todo el UI en español (`lang="es"`).
- **Página única:** `app/page.tsx` (Server Component) con 4 anclas: `#perfil` `#proyectos` `#competencias` `#contacto`.
- **Proyectos mostrados:** 1 solo — **Nexus RBAC** como caso de estudio. Sin proyectos fantasma, sin badges `Planificado`, sin `Fase 2`, sin `Slot reservado`.
- **Demo viva:** NO hay. Badge honesto: `Funcional · Código en GitHub` + nota `Sin demo pública aún: requiere PostgreSQL local`.
- **Verificación:** `npx tsc --noEmit` limpio · `npm run lint` limpio · `npm test` 33/33 verde · `npm run build` export estático OK.

## 2. Nexus RBAC (único caso publicado)

- **Qué es:** SaaS multi-tenant con RBAC granular. Organizaciones, usuarios, roles, permisos y proyectos con aislamiento por `tenantId` + dashboard.
- **Repos:**
  - Backend: `https://github.com/danielbarreramunoz/nexus-rbac-backend`
  - Frontend: `https://github.com/danielbarreramunoz/nexus-rbac-front`
- **Stack real (mostrado en el sitio):**
  - Backend: NestJS 12 modular · TypeORM 1.1 + pg · passport-jwt + bcrypt · class-validator · Vitest + Supertest.
  - Frontend: Next.js 16.4 App Router `(auth)/(dashboard)` · React 19 + Context · Tailwind 4 · componentes propios + lucide/sonner · Vitest + RTL + jsdom.
- **Retos publicados (3):** aislamiento por `tenantId` · auth en 2 capas (`JwtAuthGuard` + `RolesGuard/PermissionsGuard` con `@Roles/@Permissions`) · dashboard con switcher, KPIs, CRUD y rutas protegidas.
- **Capturas:** `public/img/nexus-rbac/` → `login.png`, `panel.png`, `usuarios.png`, `roles.png`, `proyectos.png`. Se renderizan con `next/image` (`images.unoptimized: true` por `output: export`).
- **Diagrama:** `app/components/ArchitectureDiagram.tsx` (SVG puro, 3 pasos + nota `POST /auth/login → JWT`).
- **Galería:** `app/components/ProjectGallery.tsx` (`"use client"`, tabs con las 5 capturas, default `panel.png`).

## 3. Estructura de archivos relevante

```
app/page.tsx                          # toda la página (hero, caso, competencias, footer)
app/layout.tsx                        # fuentes + metadata ES
app/globals.css                       # tema papel + .paper-grain + .font-display
app/components/BackToTop.tsx          # isla cliente (scroll > 600px)
app/components/ProjectGallery.tsx     # isla cliente (tabs galería)
app/components/ArchitectureDiagram.tsx# server, SVG puro
public/img/nexus-rbac/*.png           # 5 capturas
__tests__/Home.test.tsx               # 33 tests
```

## 4. Convenciones (no romper)

- Español siempre. `header` estático en móvil, `sm:sticky sm:top-0`. Anclas con `scroll-mt-28`. Animaciones con prefijo `motion-safe:`. Footer: LinkedIn (primary) + GitHub + `mailto:`, externos con `target="_blank" rel="noopener noreferrer"`.
- `page.tsx` sigue Server Component; interactividad solo en islas `app/components/`.
- Deploy: `output: export` + `images.unoptimized` (Cloudflare Pages). No quitar.
- Lockfile: regenerar con `npx npm@10 install` antes de push (CI/Cloudflare usan npm 10).
- Props de `RootLayout` tipadas explícitas (no usar global `LayoutProps` generado).

## 5. Roadmap — 2 proyectos próximos

> El dueño confirmó que vienen 2 proyectos más. Al llegar, integrarlos aquí y en `app/page.tsx`. No inventar datos.

### Proyecto 2 — `(pendiente: nombre, repo, stack, capturas)`

- [ ] Definir nombre, descripción de impacto (2 líneas) y 3 retos técnicos.
- [ ] URLs de repos (backend/frontend o monorepo).
- [ ] Capturas en `public/img/<slug>/` (mínimo 3: principal + 2 detalle).
- [ ] Decidir si hay demo viva; si no, reutilizar nota honesta de PostgreSQL/local.
- [ ] Agregar como segundo `<article>` en `#proyectos` o como segundo tab del caso (decidir al tener contenido).

### Proyecto 3 — `(pendiente: igual que arriba)`

- [ ] Mismo checklist que Proyecto 2.

### Regla al agregar proyectos

1. Actualizar `coreStack` solo si el stack es realmente dominado (no buzzwords).
2. Cada proyecto: badge de estado honesto (`Funcional` / `En producción` solo con URL viva verificada), 3 retos, stack separado, galería o diagrama propio.
3. Actualizar tests (`__tests__/Home.test.tsx`): nuevos asserts por proyecto, sin reintroducir `Planificado`/`Slot`/`Fase 2`.
4. Actualizar este archivo (sección 1 y 5) + `metadata` en `layout.tsx` si cambia el posicionamiento.
5. Verificar: `tsc --noEmit` → `lint` → `test` → `build`.

## 6. Comandos

```bash
npm run dev    # dev (Turbopack)
npm test       # vitest run (33 tests)
npm run lint   # eslint
npm run build  # export estático a out/
npx tsc --noEmit
```
