# Portafolio — Estado del proyecto

> Fuente de verdad para el asistente y el dueño. Actualizar este archivo con cada cambio (nuevo proyecto, captura, copy o sección).

## 1. Estado actual (2026-10-25)

- **Tema:** editorial claro. Fondo papel `#faf9f6`, tinta `#1c1b1a`, acento cobre `orange-800/900`. Textura `paper-grain` (puntos). Sin glows indigo/púrpura, sin look v0/Bolt.
- **Fuentes:** `Fraunces` (display serif, `font-display`) + `Geist Sans` (cuerpo) + `Geist Mono` (labels técnicas). Definidas en `app/layout.tsx`, mapeadas en `app/globals.css` vía `@theme inline`.
- **Idioma:** todo el UI en español (`lang="es"`).
- **Página única:** `app/page.tsx` (Server Component) con 4 anclas: `#perfil` `#proyectos` `#competencias` `#contacto`.
- **Proyectos mostrados:** 2 — **DocenciApp** (caso destacado, SaaS en producción) y **Nexus RBAC** (caso de estudio, código abierto). Sin proyectos fantasma, sin badges `Planificado`, sin `Fase 2`, sin `Slot reservado`.
- **Demo viva:** DocenciApp enlaza a `https://libro.docenciapp.cl` (acceso con credenciales institucionales, sin repo público por NDA). Nexus RBAC sin demo pública (requiere PostgreSQL local).
- **Verificación:** `npx tsc --noEmit` limpio · `npm run lint` limpio · `npm test` 46/46 verde · `npm run build` export estático OK.

## 2. DocenciApp (caso destacado, en producción)

- **Qué es:** SaaS multi-tenant de gestión educativa integral para establecimientos chilenos (pedagógica, administrativa, operativa y fiscal). Backend NestJS 11 de ~83 módulos, frontend PWA Next.js 16 con ~199 rutas. Datos de capturas anonimizados (Ley 19.628 / GDPR, NDA).
- **Rol publicado:** Senior Full Stack Developer & Software Architect — liderazgo de diseño, planificación asistida por agentes e implementación de módulos core (Libro de Clases, Ficha 360°, Asistencia, Auditoría).
- **Link:** `https://libro.docenciapp.cl` (botón `Ver sistema en producción →`, acceso restringido, sin repo público).
- **Retos publicados (4):** contexto school-user + RBAC + auditoría con timeline · Libro de Clases consolidado · Ficha 360° (conductual + salud + PIE + convivencia) · SIGE/MINEDUC + ClaveÚnica + firmas.
- **Capturas:** `public/img/docenciapp/` → `dashboard-libro-clases.png`, `ficha-360-hoja-de-vida.png`, `matriz-calificaciones.png`, `reporte-calificaciones.png`, `reporte-consolidado.png`.

## 3. Nexus RBAC (caso de estudio, código abierto)

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

## 4. Estructura de archivos relevante

```
app/page.tsx                          # toda la página (hero, 2 casos, competencias, footer)
app/layout.tsx                        # fuentes + metadata ES
app/globals.css                       # tema papel + .paper-grain + .font-display
app/components/BackToTop.tsx          # isla cliente (scroll > 600px)
app/components/ProjectGallery.tsx     # isla cliente con props (project, shots, defaultIndex) + lightbox con zoom
app/components/ArchitectureDiagram.tsx# server, SVG con props (project, steps, footnote)
public/img/nexus-rbac/*.png           # 5 capturas Nexus
public/img/docenciapp/*.png            # 5 capturas DocenciApp (nombres kebab-case)
public/logo.svg                       # monograma DB (Concepto 1, blanco sobre transparente)
app/icon.png                          # favicon 512 (monograma blanco sobre stone-900, autodetectado)
app/favicon.ico                       # ELIMINADO, reemplazado por icon.png
app/apple-icon.png                    # icono Apple 180 (autodetectado)
__tests__/Home.test.tsx               # 46 tests (incluye lightbox + logo)
```

## 5. Marca — Monograma DB (Concepto 1 de `imagen_17.jpg`)

- Cubo isométrico en línea con D (cara izquierda) y B (cara derecha) compartiendo el fuste central. Trazo monolineal blanco, redondeado.
- `public/logo.svg`: marca sin fondo, usada en el header sobre la pastilla `bg-stone-900`.
- `app/icon.png` (512) y `app/apple-icon.png` (180): misma marca en blanco sobre rounded-square `stone-900` (`#1C1917`), generados con el script de dibujo documentado abajo. Next los sirve en `/icon.png` y `/apple-icon.png` automáticamente.
- Para regenerar los PNG tras editar la geometría, replicar las coordenadas del SVG en System.Drawing (ver historial: `New-DbIcon 512/180`).

## 6. Convenciones (no romper)

- Español siempre. `header` estático en móvil, `sm:sticky sm:top-0`. Anclas con `scroll-mt-28`. Animaciones con prefijo `motion-safe:`. Footer: LinkedIn (primary) + GitHub + `mailto:`, externos con `target="_blank" rel="noopener noreferrer"`.
- `page.tsx` sigue Server Component; interactividad solo en islas `app/components/`.
- Deploy: `output: export` + `images.unoptimized` (Cloudflare Pages). No quitar.
- Lockfile: regenerar con `npx npm@10 install` antes de push (CI/Cloudflare usan npm 10).
- Props de `RootLayout` tipadas explícitas (no usar global `LayoutProps` generado).

## 7. Roadmap — 1 proyecto próximo

> Queda 1 proyecto por integrar (DocenciApp ya es el Proyecto 2). Al llegar, seguir el checklist sin inventar datos.

### Proyecto 3 — `(pendiente: nombre, repo, stack, capturas)`

- [ ] Definir nombre, descripción de impacto (2 líneas) y 3 retos técnicos.
- [ ] URLs de repos (backend/frontend o monorepo) o aclarar si es propietario sin repo público.
- [ ] Capturas en `public/img/<slug>/` en kebab-case (mínimo 3: principal + 2 detalle).
- [ ] Decidir CTA honesto: demo viva verificada, sistema restringido o nota local. Nunca placeholders clicables.
- [ ] Agregar como tercer `<article>` en `#proyectos` con galería/diagrama vía props.
- [ ] Actualizar tests (`__tests__/Home.test.tsx`): nuevos asserts por proyecto, sin reintroducir `Planificado`/`Slot`/`Fase 2`.
- [ ] Actualizar este archivo (§1, §7 y §8 si cambian conteos) + `metadata` en `layout.tsx` si cambia el posicionamiento.
- [ ] Verificar: `tsc --noEmit` → `lint` → `test` → `build`.

## 8. Comandos

```bash
npm run dev    # dev (Turbopack)
npm test       # vitest run (46 tests)
npm run lint   # eslint
npm run build  # export estático a out/
npx tsc --noEmit
```
