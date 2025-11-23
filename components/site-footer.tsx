import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-4">SitiosDeApuestasPE</h3>
            <p className="text-accent-foreground/80 mb-4 leading-relaxed">
              Tu guía confiable para encontrar las mejores casas de apuestas deportivas en Perú. Análisis profesionales,
              comparativas actualizadas y recomendaciones basadas en evaluaciones rigurosas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Información</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-accent-foreground/80">
              <li>
                <Link href="/politica-cookies" className="hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Juego Responsable</h4>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              El juego debe ser una forma de entretenimiento. Si crees que tienes un problema con el juego, busca ayuda
              profesional.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 mb-8">
          <h5 className="text-accent-foreground font-semibold mb-6 text-center">Juego Responsable y Regulación</h5>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Link
              href="https://www.gob.pe/mincetur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-background p-3 rounded-lg"
              aria-label="MINCETUR Perú"
            >
              <Image src="/mincetur-peru-logo.jpg" alt="MINCETUR" width={100} height={60} className="h-12 w-auto" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-background p-3 rounded-lg"
              aria-label="GamCare"
            >
              <Image src="/gamcare.png" alt="GamCare" width={100} height={60} className="h-12 w-auto" />
            </Link>
            <Link
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-background p-3 rounded-lg"
              aria-label="BeGambleAware"
            >
              <Image
                src="/begambleaware-logo.png"
                alt="BeGambleAware"
                width={100}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} SitiosDeApuestasPE. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">+18 | Juega con responsabilidad</p>
        </div>
      </div>
    </footer>
  )
}
