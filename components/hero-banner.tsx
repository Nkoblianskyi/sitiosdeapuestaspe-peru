"use client"

export function HeroBanner() {
  return (
    <section className="relative h-[130px] md:h-[150px] overflow-hidden">
      <div className="container mx-auto px-4 relative h-full flex items-center">
        <div className="max-w-3xl">
                    <div className="inline-block mt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary border border-primary rounded-full text-[10px] md:text-xs font-semibold text-primary-foreground uppercase tracking-wide">
              Actualizado Febrero 2025
            </span>
          </div>

          <h1 className="text-xl md:text-3xl font-bold tracking-tight text-primary-foreground mb-2 text- leading-tight">
            Análisis Profesional de <span className="text-primary">Apuestas Deportivas</span> en Perú
          </h1>

          <p className="text-xs md:text-sm text-primary-foreground max-w-xl leading-relaxed text-pretty mb-2.5">
            Comparativas detalladas y rankings verificados para encontrar la mejor plataforma en el mercado peruano.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-primary-foreground">
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Regulado MINCETUR</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Análisis Independiente</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              <span>Verificado 2025</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
