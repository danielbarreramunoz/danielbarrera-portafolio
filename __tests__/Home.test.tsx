import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import Home from "../app/page";

describe("Home — Page", () => {
  // ─── Hero & Perfil ────────────────────────────────────────────────

  describe("Hero", () => {
    it("renderiza el badge de perfil Senior Full Stack Developer en el header", () => {
      render(<Home />);

      const header = screen.getByRole("banner");
      expect(
        within(header).getByText("Senior Full Stack Developer")
      ).toBeInTheDocument();
    });

    it("renderiza el encabezado principal con título senior", () => {
      render(<Home />);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent("Senior Full Stack Developer");
      expect(heading).toHaveTextContent("Software Architect");
    });

    it("renderiza el texto descriptivo del hero sin jerga interna", () => {
      render(<Home />);

      expect(
        screen.getByText(/plataformas SaaS multi-tenant/i)
      ).toBeInTheDocument();
      expect(screen.queryByText(/Fase 2/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Slot reservado/i)).not.toBeInTheDocument();
    });

    it("renderiza el indicador de disponibilidad", () => {
      render(<Home />);

      expect(
        screen.getByText(/Disponible · SaaS \/ NestJS \/ Next.js/i)
      ).toBeInTheDocument();
    });
  });

  // ─── Stack Principal ──────────────────────────────────────────────

  describe("Stack principal", () => {
    it("renderiza todas las tecnologías del stack principal en la sección de perfil", () => {
      render(<Home />);

      const perfilSection = document.getElementById("perfil")!;
      const stackList = within(perfilSection).getByRole("list");

      const expectedStack = [
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

      expectedStack.forEach((tech) => {
        expect(within(stackList).getByText(tech)).toBeInTheDocument();
      });
    });
  });

  // ─── Navegación por anclas ────────────────────────────────────────

  describe("Navegación por anclas", () => {
    it("renderiza la navegación principal con todos los enlaces", () => {
      render(<Home />);

      const nav = screen.getByRole("navigation", {
        name: /navegación principal/i,
      });
      expect(nav).toBeInTheDocument();

      const links = within(nav).getAllByRole("link");
      expect(links.length).toBe(4);
    });

    it("los enlaces de navegación apuntan a los anclas correctos", () => {
      render(<Home />);

      const nav = screen.getByRole("navigation", {
        name: /navegación principal/i,
      });

      const perfilLink = within(nav).getByRole("link", { name: /perfil/i });
      const proyectosLink = within(nav).getByRole("link", {
        name: /^proyectos$/i,
      });
      const competenciasLink = within(nav).getByRole("link", {
        name: /competencias/i,
      });
      const contactoLink = within(nav).getByRole("link", {
        name: /contacto/i,
      });

      expect(perfilLink).toHaveAttribute("href", "#perfil");
      expect(proyectosLink).toHaveAttribute("href", "#proyectos");
      expect(competenciasLink).toHaveAttribute("href", "#competencias");
      expect(contactoLink).toHaveAttribute("href", "#contacto");
    });

    it("renderiza el enlace CTA del hero hacia #proyectos", () => {
      render(<Home />);

      const ctaLink = screen.getByRole("link", {
        name: /ver caso de estudio/i,
      });
      expect(ctaLink).toHaveAttribute("href", "#proyectos");
    });

    it("no renderiza enlaces redundantes de navegación interna en el footer", () => {
      render(<Home />);

      const footer = screen.getByRole("contentinfo");
      expect(
        within(footer).queryByRole("link", { name: /volver arriba/i })
      ).not.toBeInTheDocument();
    });
  });

  // ─── Caso de estudio Nexus RBAC ───────────────────────────────────

  describe("Caso de estudio Nexus RBAC", () => {
    it("renderiza el badge funcional honesto", () => {
      render(<Home />);

      const badge = screen.getByText("Funcional · Código en GitHub");
      expect(badge).toBeInTheDocument();
      expect(badge.className).toContain("emerald");
    });

    it("renderiza el título del caso de estudio", () => {
      render(<Home />);

      expect(
        screen.getByText(/Nexus RBAC — SaaS multi-tenant con RBAC granular/i)
      ).toBeInTheDocument();
    });

    it("renderiza los tres retos técnicos", () => {
      render(<Home />);

      const proyectosSection = document.getElementById("proyectos")!;
      expect(
        within(proyectosSection).getByText(/Aislamiento multi-tenant estricto/i)
      ).toBeInTheDocument();
      expect(
        within(proyectosSection).getByText(/Autorización en dos capas/i)
      ).toBeInTheDocument();
      expect(
        within(proyectosSection).getByText(/Dashboard con rutas protegidas/i)
      ).toBeInTheDocument();
    });

    it("renderiza stacks de backend y frontend", () => {
      render(<Home />);

      const proyectosSection = document.getElementById("proyectos")!;
      expect(
        within(proyectosSection).getByText("NestJS 12 modular")
      ).toBeInTheDocument();
      expect(
        within(proyectosSection).getByText("Next.js App Router")
      ).toBeInTheDocument();
    });

    it("enlaza a los repos Backend y Frontend en GitHub", () => {
      render(<Home />);

      const backend = screen.getByRole("link", { name: /código backend →/i });
      const frontend = screen.getByRole("link", {
        name: /código frontend →/i,
      });

      expect(backend).toHaveAttribute(
        "href",
        "https://github.com/danielbarreramunoz/nexus-rbac-backend"
      );
      expect(backend).toHaveAttribute("target", "_blank");
      expect(backend).toHaveAttribute("rel", "noopener noreferrer");

      expect(frontend).toHaveAttribute(
        "href",
        "https://github.com/danielbarreramunoz/nexus-rbac-front"
      );
      expect(frontend).toHaveAttribute("target", "_blank");
      expect(frontend).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("aclara que no hay demo pública y requiere PostgreSQL local", () => {
      render(<Home />);

      expect(
        screen.getByText(/Sin demo pública aún/i)
      ).toBeInTheDocument();
    });

    it("no muestra proyectos fantasma ni slots", () => {
      render(<Home />);

      expect(screen.queryByText(/Planificado/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Slot reservado/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Proyecto 02/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Proyecto 03/i)).not.toBeInTheDocument();
    });
  });

  // ─── Galería y arquitectura ───────────────────────────────────────

  describe("Galería y arquitectura", () => {
    it("renderiza la galería con las cinco capturas", () => {
      render(<Home />);

      expect(
        screen.getByAltText(
          "Panel administrativo de Nexus RBAC con métricas"
        )
      ).toBeInTheDocument();
      const tabs = screen.getByRole("tablist", {
        name: /capturas del proyecto/i,
      });
      expect(within(tabs).getAllByRole("tab").length).toBe(5);
    });

    it("renderiza el diagrama de arquitectura en tres pasos", () => {
      render(<Home />);

      const diagram = screen.getByRole("figure", {
        name: /diagrama de arquitectura/i,
      });
      expect(within(diagram).getByText("Next.js 16.4")).toBeInTheDocument();
      expect(within(diagram).getByText("NestJS 12 API")).toBeInTheDocument();
      expect(
        within(diagram).getByText("PostgreSQL + TypeORM")
      ).toBeInTheDocument();
      expect(
        within(diagram).getByText(/POST \/auth\/login/i)
      ).toBeInTheDocument();
    });
  });

  // ─── Sección Competencias ─────────────────────────────────────────

  describe("Sección Competencias", () => {
    it("renderiza los títulos de las dos tarjetas de competencias", () => {
      render(<Home />);

      expect(
        screen.getByText("Arquitectura modular y RBAC")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Testing & Calidad de Código")
      ).toBeInTheDocument();
    });

    it("renderiza el pipeline visual de 4 pasos", () => {
      render(<Home />);

      expect(screen.getByText("Diseño modular")).toBeInTheDocument();
      expect(screen.getByText("Auth + tenant")).toBeInTheDocument();
      expect(screen.getByText("Tests verdes")).toBeInTheDocument();
      expect(screen.getByText("Ship con Docker")).toBeInTheDocument();
    });
  });

  // ─── Footer ───────────────────────────────────────────────────────

  describe("Footer", () => {
    it("renderiza el footer con el nombre y título", () => {
      render(<Home />);

      const footer = screen.getByRole("contentinfo");
      expect(footer).toBeInTheDocument();

      expect(
        within(footer).getByText("Daniel Barrera")
      ).toBeInTheDocument();
      expect(
        within(footer).getByText("Senior Full Stack Developer")
      ).toBeInTheDocument();
    });

    it("renderiza los enlaces de contacto LinkedIn, GitHub y Email", () => {
      render(<Home />);

      const footer = screen.getByRole("contentinfo");
      const linkedIn = within(footer).getByRole("link", {
        name: /linkedin/i,
      });
      const gitHub = within(footer).getByRole("link", { name: /github/i });
      const email = within(footer).getByRole("link", { name: /email/i });

      expect(linkedIn).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/danielbarreram/"
      );
      expect(linkedIn).toHaveAttribute("target", "_blank");
      expect(linkedIn).toHaveAttribute("rel", "noopener noreferrer");
      expect(gitHub).toHaveAttribute(
        "href",
        "https://github.com/danielbarreramunoz"
      );
      expect(gitHub).toHaveAttribute("target", "_blank");
      expect(gitHub).toHaveAttribute("rel", "noopener noreferrer");
      expect(email).toHaveAttribute("href", "mailto:dbarrera.ap@gmail.com");
    });

    it("renderiza el copyright con el año 2026", () => {
      render(<Home />);

      const footer = screen.getByRole("contentinfo");
      expect(
        within(footer).getByText(/© 2026 Daniel Barrera/i)
      ).toBeInTheDocument();
    });
  });

  // ─── Mejoras responsive / accesibilidad ───────────────────────────

  describe("Mejoras responsive y accesibilidad", () => {
    it("las secciones con ancla tienen scroll-mt-28 para offset del header sticky", () => {
      render(<Home />);

      const perfil = document.getElementById("perfil")!;
      const proyectos = document.getElementById("proyectos")!;
      const competencias = document.getElementById("competencias")!;
      const contacto = document.getElementById("contacto")!;

      expect(perfil).toHaveClass("scroll-mt-28");
      expect(proyectos).toHaveClass("scroll-mt-28");
      expect(competencias).toHaveClass("scroll-mt-28");
      expect(contacto).toHaveClass("scroll-mt-28");
    });

    it("los indicadores de status usan motion-safe para respetar prefers-reduced-motion", () => {
      render(<Home />);

      const pingElements = document.querySelectorAll(
        ".motion-safe\\:animate-ping"
      );
      expect(pingElements.length).toBeGreaterThanOrEqual(2);

      pingElements.forEach((el) => {
        expect(el.className).toContain("motion-safe:animate-ping");
      });
    });

    it("los CTAs del hero tienen estructura responsive flex-col en móvil", () => {
      render(<Home />);

      const ctaContainer = screen
        .getByRole("link", { name: /ver caso de estudio/i })
        .closest("div");

      expect(ctaContainer).toHaveClass("flex-col");
      expect(ctaContainer).toHaveClass("sm:flex-row");
    });
  });

  // ─── Header responsive (sticky solo desde sm) ──────────────────────

  describe("Header responsive (sticky desde sm)", () => {
    it("tiene clases sm:sticky sm:top-0 para fijo solo en pantallas sm+", () => {
      render(<Home />);

      const header = screen.getByRole("banner");
      expect(header).toHaveClass("sm:sticky");
      expect(header).toHaveClass("sm:top-0");
    });

    it("no tiene clase sticky genérica (solo aplica con prefijo sm:)", () => {
      render(<Home />);

      const header = screen.getByRole("banner");
      const classes = header.className.split(/\s+/);
      const hasStickyWithoutPrefix = classes.some(
        (cls) => cls === "sticky" || cls.startsWith("sticky:")
      );
      expect(hasStickyWithoutPrefix).toBe(false);
    });
  });

  // ─── Botón flotante BackToTop ──────────────────────────────────────

  describe("Botón flotante BackToTop", () => {
    it("está oculto inicialmente (opacity-0, pointer-events-none, aria-hidden)", () => {
      const { container } = render(<Home />);

      const button = container.querySelector(
        'button[aria-label="Volver arriba"]'
      );
      expect(button).not.toBeNull();
      expect(button).toHaveClass("opacity-0");
      expect(button).toHaveClass("pointer-events-none");
      expect(button).toHaveAttribute("aria-hidden", "true");
      expect(button).toHaveAttribute("tabindex", "-1");
    });

    it("se hace visible al hacer scroll más allá de 600px", () => {
      Object.defineProperty(window, "scrollY", {
        value: 700,
        writable: true,
        configurable: true,
      });

      render(<Home />);
      fireEvent.scroll(window);

      const button = screen.getByRole("button", { name: /volver arriba/i });
      expect(button).toHaveClass("opacity-100");
      expect(button).toHaveAttribute("aria-hidden", "false");
      expect(button).toHaveAttribute("tabindex", "0");
    });

    it("permanece oculto si el scroll no supera 600px", () => {
      Object.defineProperty(window, "scrollY", {
        value: 300,
        writable: true,
        configurable: true,
      });

      const { container } = render(<Home />);
      fireEvent.scroll(window);

      const button = container.querySelector(
        'button[aria-label="Volver arriba"]'
      );
      expect(button).not.toBeNull();
      expect(button).toHaveClass("opacity-0");
      expect(button).toHaveAttribute("aria-hidden", "true");
    });

    it("llama a window.scrollTo con top: 0 al hacer click", () => {
      const scrollToSpy = vi.fn();
      window.scrollTo = scrollToSpy;

      Object.defineProperty(window, "scrollY", {
        value: 700,
        writable: true,
        configurable: true,
      });

      render(<Home />);
      fireEvent.scroll(window);

      const button = screen.getByRole("button", { name: /volver arriba/i });
      fireEvent.click(button);

      expect(scrollToSpy).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  // ─── Galería interactiva ──────────────────────────────────────────

  describe("Galería interactiva", () => {
    it("cambia la captura principal al pulsar una miniatura", async () => {
      const { default: userEvent } = await import("@testing-library/user-event");
      const user = userEvent.setup();
      render(<Home />);

      const tab = screen.getByRole("tab", {
        name: /Ver captura: Roles/i,
      });
      await user.click(tab);

      expect(
        screen.getByAltText(
          "Gestión de roles y asignación de permisos en Nexus RBAC"
        )
      ).toBeInTheDocument();
    });
  });
});
