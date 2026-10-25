import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielbarrera.pages.dev"),
  title: "Daniel Barrera — Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer especializado en plataformas SaaS multi-tenant con NestJS, Next.js y TypeScript. Caso de estudio: Nexus RBAC con auth JWT, guards de roles y permisos, y aislamiento por tenant.",
  openGraph: {
    title: "Daniel Barrera — Senior Full Stack Developer",
    description:
      "Plataformas SaaS multi-tenant escalables en NestJS y Next.js. Caso de estudio: Nexus RBAC.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
