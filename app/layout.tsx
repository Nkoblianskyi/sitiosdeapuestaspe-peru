import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SitiosDeApuestasPE - Análisis Profesional de Casas de Apuestas en Perú",
  description:
    "Análisis experto y rankings actualizados de las mejores casas de apuestas deportivas en Perú. Comparativas detalladas, bonos exclusivos y guías completas para apostadores peruanos.",
  keywords: [
    "casas de apuestas Perú",
    "apuestas deportivas Perú",
    "mejores casas de apuestas",
    "bonos de apuestas Perú",
    "análisis de casas de apuestas",
    "rankings de apuestas deportivas",
    "apuestas en línea Perú",
    "comparativa casas de apuestas",
    "guía de apuestas deportivas",
    "sitios de apuestas confiables",
  ],
  metadataBase: new URL("https://www.sitiosdeapuestaspe.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
