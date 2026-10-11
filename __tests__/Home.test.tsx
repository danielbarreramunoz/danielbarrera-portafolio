import { describe, it, expect, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import Home from "../app/page";

describe("Home — Page", () => {
  // ─── Hero & Perfil ────────────────────────────────────────────────

  describe("Hero", () => {
    it("renderiza el badge de perfil Senior Full Stack Developer en el header", () => {
      render(<Home />);

      // El texto aparece en el header (badge) y en el footer
      const badges = screen.getAllByText("Senior Full Stack Developer");
      expect(badges.length).toBe(2);
    });

    it("renderiza el encabezado principal con título y subtítulo", () => {
      render(<Home />);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveTextContent(
        "Ingeniería de Software, Arquitecturas Modulares"
      );
    });

    it("renderiza el texto descriptivo del hero", () => {
      render(<Home />);

      expect(
        screen.getByText(/Senior Full Stack Developer especializado/i)
      ).toBeInTheDocument();
    });

    it("renderiza el indicador de Cloudflare Pages Ready", () => {
      render(<Home />);

      expect(
        screen.getByText(/Cloudflare Pages Ready/i)
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
        name: /proyectos fase 2/i,
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
        name: /ver proyectos fase 2/i,
      });
      expect(ctaLink).toHaveAttribute("href", "#proyectos");
    });

    it("renderiza el enlace CTA del hero hacia #competencias", () => {
      render(<Home />);

      const enfoqueLink = screen.getByRole("link", {
        name: /enfoque de desarrollo/i,
      });
      expect(enfoqueLink).toHaveAttribute("href", "#competencias");
    });

    it("no renderiza enlaces redundantes de navegación interna en el footer", () => {
      render(<Home />);

      const footer = screen.getByRole("contentinfo");
      expect(
        within(footer).queryByRole("link", { name: /volver arriba/i })
      ).not.toBeInTheDocument();
    });
  });

  // ─── Badges de estado de proyecto ─────────────────────────────────

  describe("Badges de estado de proyecto", () => {
    it("renderiza el badge 'Planificado / Estructura Lista' del proyecto 01", () => {
      render(<Home />);

      const badge = screen.getByText("Planificado / Estructura Lista");
      expect(badge).toBeInTheDocument();
    });

    it("el badge 'Planificado / Estructura Lista' tiene estilos emerald", () => {
      render(<Home />);

      const badge = screen.getByText("Planificado / Estructura Lista");

      // El contenedor del badge debe tener clases emerald
      expect(badge.className).toContain("emerald");

      // El punto (dot) debe ser emerald
      const dot = badge.querySelector("span > span");
      expect(dot).not.toBeNull();
      expect(dot!.className).toContain("bg-emerald-400");
    });

    it("renderiza los badges 'Planificado' de los proyectos 02 y 03", () => {
      render(<Home />);

      const badges = screen.getAllByText("Planificado");
      expect(badges.length).toBe(2);
    });

    it("los badges 'Planificado' tienen estilos amber", () => {
      render(<Home />);

      const badges = screen.getAllByText("Planificado");
      badges.forEach((badge) => {
        expect(badge.className).toContain("amber");

        const dot = badge.querySelector("span > span");
        expect(dot).not.toBeNull();
        expect(dot!.className).toContain("bg-amber-400");
      });
    });
  });

  // ─── Tarjetas de proyecto ─────────────────────────────────────────

  describe("Tarjetas de proyecto", () => {
    it("renderiza las tres tarjetas con sus títulos", () => {
      render(<Home />);

      expect(
        screen.getByText(/Proyecto 01: SaaS Full Stack/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Proyecto 02: Event-Driven Microservices/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Proyecto 03: Cloud Application/i)
      ).toBeInTheDocument();
    });

    it("renderiza el stack de cada proyecto dentro de su tarjeta", () => {
      render(<Home />);

      const proyectosSection = document.getElementById("proyectos")!;
      const articles = within(proyectosSection).getAllByRole("article");

      // Proyecto 01
      expect(
        within(articles[0]).getByText("Next.js (App Router)")
      ).toBeInTheDocument();
      expect(within(articles[0]).getByText("TypeORM")).toBeInTheDocument();

      // Proyecto 02
      expect(
        within(articles[1]).getByText("RabbitMQ / SQS")
      ).toBeInTheDocument();
      expect(
        within(articles[1]).getByText("Docker Compose")
      ).toBeInTheDocument();

      // Proyecto 03
      expect(within(articles[2]).getByText("Serverless")).toBeInTheDocument();
      expect(within(articles[2]).getByText("Webhooks")).toBeInTheDocument();
    });

    it("renderiza los puntos clave de cada proyecto", () => {
      render(<Home />);

      const proyectosSection = document.getElementById("proyectos")!;
      const articles = within(proyectosSection).getAllByRole("article");

      expect(
        within(articles[0]).getByText("Arquitectura modular NestJS")
      ).toBeInTheDocument();
      expect(
        within(articles[1]).getByText("Broker de eventos")
      ).toBeInTheDocument();
      expect(
        within(articles[2]).getByText("Ejecución Serverless")
      ).toBeInTheDocument();
    });
  });

  // ─── Slots Demo / Código ──────────────────────────────────────────

  describe("Slots demo / código", () => {
    it("renderiza el label de slot reservado en cada tarjeta", () => {
      render(<Home />);

      const labels = screen.getAllByText("Slot reservado: demo + código");
      expect(labels.length).toBe(3);
    });

    it("renderiza los placeholders Demo → y Código → en cada tarjeta", () => {
      render(<Home />);

      const demos = screen.getAllByText("Demo →");
      const codigos = screen.getAllByText("Código →");

      expect(demos.length).toBe(3);
      expect(codigos.length).toBe(3);
    });

    it("los slots Demo y Código son spans, no links (sin href)", () => {
      render(<Home />);

      const demos = screen.getAllByText("Demo →");
      const codigos = screen.getAllByText("Código →");

      demos.forEach((demo) => {
        expect(demo.tagName).toBe("SPAN");
        expect(demo).not.toHaveAttribute("href");
      });

      codigos.forEach((codigo) => {
        expect(codigo.tagName).toBe("SPAN");
        expect(codigo).not.toHaveAttribute("href");
      });
    });
  });

  // ─── Sección Competencias ─────────────────────────────────────────

  describe("Sección Competencias", () => {
    it("renderiza los títulos de las dos tarjetas de competencias", () => {
      render(<Home />);

      expect(
        screen.getByText("Desarrollo Asistido por Agentes IA")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Testing & Calidad de Código")
      ).toBeInTheDocument();
    });

    it("renderiza el pipeline visual de 4 pasos", () => {
      render(<Home />);

      expect(screen.getByText("Diseño modular")).toBeInTheDocument();
      expect(screen.getByText("Agentes + TSC")).toBeInTheDocument();
      expect(screen.getByText("Tests verdes")).toBeInTheDocument();
      expect(screen.getByText("Ship a Cloud")).toBeInTheDocument();
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

      const pingElements = document.querySelectorAll(".motion-safe\\:animate-ping");
      expect(pingElements.length).toBeGreaterThanOrEqual(2);

      pingElements.forEach((el) => {
        expect(el.className).toContain("motion-safe:animate-ping");
      });
    });

    it("los CTAs del hero tienen estructura responsive flex-col en móvil", () => {
      render(<Home />);

      const ctaContainer = screen
        .getByRole("link", { name: /ver proyectos fase 2/i })
        .closest("div");

      expect(ctaContainer).toHaveClass("flex-col");
      expect(ctaContainer).toHaveClass("sm:flex-row");
    });

    it("los CTAs del hero tienen text-center para alineación responsive", () => {
      render(<Home />);

      const proyectosCta = screen.getByRole("link", {
        name: /ver proyectos fase 2/i,
      });
      const competenciasCta = screen.getByRole("link", {
        name: /enfoque de desarrollo/i,
      });

      expect(proyectosCta).toHaveClass("text-center");
      expect(competenciasCta).toHaveClass("text-center");
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
      // Extraemos las clases y verificamos que no exista "sticky" sin prefijo
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
      // Mockear window.scrollY para simular scroll
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

      // Hacer visible el botón primero simulando scroll
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
});
