import { bettingSites } from "@/lib/betting-sites"
import { BettingSiteCard } from "./betting-site-card"

export function NuestraSeleccion() {
  const topSite = bettingSites[0]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1084px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            Recomendado
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestra Selección Principal</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Basándonos en nuestro análisis exhaustivo, esta es la mejor opción para apuestas deportivas en Perú en 2024.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BettingSiteCard site={topSite} featured />
        </div>
      </div>
    </section>
  )
}
