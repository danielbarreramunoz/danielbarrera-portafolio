import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielbarrera.pages.dev"),
  title: "Daniel Barrera — Senior Full Stack Developer",
  description:
    "Portafolio técnico de Daniel Barrera: Next.js, NestJS, TypeScript, arquitecturas modulares, sistemas orientados a eventos y automatización con agentes IA.",
  openGraph: {
    title: "Daniel Barrera — Senior Full Stack Developer",
    description:
      "Portafolio técnico: Next.js, NestJS, TypeScript, arquitecturas modulares y automatización con agentes IA.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
