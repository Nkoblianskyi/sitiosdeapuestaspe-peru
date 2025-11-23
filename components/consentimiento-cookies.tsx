"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function ConsentimientoCookies() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookies-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-muted-foreground">
          <p className="mb-2">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
              Política de Cookies
            </Link>{" "}
            y{" "}
            <Link href="/politica-privacidad" className="text-primary hover:underline font-medium">
              Política de Privacidad
            </Link>
            .
          </p>
        </div>
        <button
          onClick={acceptCookies}
          className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all shadow-md whitespace-nowrap"
        >
          Aceptar Cookies
        </button>
      </div>
    </div>
  )
}
