import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/hero-banner"
import { ComparativaTable } from "@/components/comparativa-table"
import { AnalisisSection } from "@/components/analisis-section"
import { NuestraSeleccion } from "@/components/nuestra-seleccion"
import { PreguntasSection } from "@/components/preguntas-section"
import { SiteFooter } from "@/components/site-footer"
import { ConsentimientoCookies } from "@/components/consentimiento-cookies"
import { OfertaModal } from "@/components/oferta-modal"

export default function HomePage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/peru-sports-celebration.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10">
        <SiteHeader />
        <HeroBanner />
        <div id="rankings" className="scroll-mt-20 ">
          <ComparativaTable />
        </div>
        <div className="max-w-[1050px] mx-auto px-4 py-16">
          <div id="analisis" className="scroll-mt-20 ">
          <AnalisisSection />
        </div>
        <NuestraSeleccion />
        <div id="preguntas" className="scroll-mt-20">
          <PreguntasSection />
        </div>
        </div>
        <SiteFooter />

        <ConsentimientoCookies />
        <OfertaModal />
      </div>
    </div>
  )
}
