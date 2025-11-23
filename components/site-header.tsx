"use client"

import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/favicon.ico" alt="logo" width={32} height={32} className="bg-black rounded-full"/>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                SitiosDeApuestasPE
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Análisis Profesional</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
