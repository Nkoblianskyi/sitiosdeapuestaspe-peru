  "use client"

  import { useState, useEffect } from "react"
  import { X, Star } from "lucide-react"
  import { bettingSites } from "@/lib/betting-sites"
  import Image from "next/image"

  export function OfertaModal() {
    const [isOpen, setIsOpen] = useState(false)
    const topSite = bettingSites[0]

    useEffect(() => {
      const timer = setTimeout(() => {
        const modalShown = sessionStorage.getItem("offer-modal-shown")
        if (!modalShown) {
          setIsOpen(true)
          sessionStorage.setItem("offer-modal-shown", "true")
        }
      }, 8000)

      return () => clearTimeout(timer)
    }, [])

    if (!isOpen) return null

    const renderStars = (rating: number) => {
      const stars = []
      const normalizedRating = (rating / 10) * 5

      for (let i = 1; i <= 5; i++) {
        const fillPercentage = Math.min(Math.max(normalizedRating - (i - 1), 0), 1) * 100

        stars.push(
          <div key={i} className="relative inline-block">
            <Star className="w-6 h-6 text-muted" />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
          </div>,
        )
      }
      return stars
    }

    return (
      <div className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-card rounded-2xl max-w-xl w-full shadow-2xl relative my-8 border border-border">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 w-10 h-10 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Oferta Exclusiva
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">¡No te pierdas esta oportunidad!</h3>
              <p className="text-muted-foreground">La mejor casa de apuestas deportivas de Perú</p>
            </div>

            <div className="flex items-center justify-center mb-6  bg-black p-2 rounded-lg">
              <div className="relative w-56 h-24">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-card-foreground mb-2">
                {topSite.rating}
                <span className="text-lg text-muted-foreground">/10</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">{renderStars(topSite.rating)}</div>
              <p className="text-sm text-muted-foreground">Basado en {topSite.reviewsCount.toLocaleString()} opiniones</p>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mb-6 border-2 border-primary/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{topSite.destacado}</div>
              </div>
            </div>

            <a href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-full text-center px-8 py-4 bg-accent text-accent-foreground font-bold text-lg rounded-lg shadow-lg hover:bg-accent/90 transition-all cursor-pointer">
                Reclamar Bono Ahora
              </div>
            </a>

            <p className="text-xs text-muted-foreground text-center mt-4">{topSite.terms}</p>
          </div>
        </div>
      </div>
    )
  }
