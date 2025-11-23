import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Sobre Nosotros | SitiosDeApuestasPE",
  description:
    "Conoce más sobre SitiosDeApuestasPE, tu fuente confiable de análisis y comparativas de casas de apuestas deportivas en Perú.",
}

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="py-16 px-4">
        <div className="max-w-[1084px] mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-red-600 hover:text-red-700 font-medium transition-colors">
              ← Volver al inicio
            </Link>
          </div>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sobre Nosotros</h1>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed m-0">
                SitiosDeApuestasPE es la plataforma líder en análisis y comparativas de casas de apuestas deportivas en
                Perú. Nuestro objetivo es proporcionar información transparente, objetiva y actualizada para ayudar a
                los apostadores peruanos a tomar decisiones informadas.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestra Misión</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Nos dedicamos a evaluar exhaustivamente cada casa de apuestas que opera en el mercado peruano,
                analizando aspectos cruciales como la seguridad, variedad de deportes, cuotas competitivas, métodos de
                pago locales, atención al cliente y experiencia de usuario.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Creemos que cada apostador merece acceso a información clara y detallada que le permita elegir la
                plataforma que mejor se adapte a sus necesidades y preferencias deportivas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Metodología de Evaluación</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Nuestro equipo de expertos realiza análisis rigurosos utilizando una metodología comprobada que evalúa
                múltiples criterios objetivos. Cada casa de apuestas es sometida a pruebas exhaustivas que incluyen:
              </p>

              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Seguridad y Licencias</h3>
                <p className="text-slate-700 leading-relaxed">
                  Verificamos que todas las plataformas cuenten con las licencias necesarias y cumplan con las
                  normativas establecidas por MINCETUR. La protección de datos personales y financieros es nuestra
                  prioridad.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Variedad Deportiva</h3>
                <p className="text-slate-700 leading-relaxed">
                  Analizamos la amplitud de deportes disponibles, con especial énfasis en el fútbol peruano e
                  internacional, así como en disciplinas populares como tenis, baloncesto, vóley y deportes emergentes.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Competitividad de Cuotas</h3>
                <p className="text-slate-700 leading-relaxed">
                  Comparamos las cuotas ofrecidas en eventos deportivos relevantes para asegurar que los usuarios
                  obtengan el mejor valor por sus apuestas.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Experiencia de Usuario</h3>
                <p className="text-slate-700 leading-relaxed">
                  Evaluamos la facilidad de navegación, velocidad de carga, diseño responsive y funcionalidades tanto en
                  plataformas web como en aplicaciones móviles.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Independencia y Transparencia</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Mantenemos nuestra independencia editorial en todos nuestros análisis y recomendaciones. Si bien podemos
                recibir compensación cuando los usuarios se registran en casas de apuestas a través de nuestros enlaces,
                esto no influye en nuestras evaluaciones objetivas.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Todas nuestras calificaciones se basan en pruebas reales y criterios medibles. Actualizamos
                constantemente nuestras revisiones para reflejar cambios en las plataformas y garantizar que la
                información sea siempre precisa.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Compromiso con el Juego Responsable</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Promovemos activamente el juego responsable y la prevención de la adicción al juego. Recomendamos
                únicamente plataformas que ofrezcan herramientas de autoexclusión, límites de depósito y acceso a
                recursos de ayuda profesional.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Las apuestas deportivas deben ser una forma de entretenimiento, nunca una fuente de ingresos. Instamos a
                todos nuestros visitantes a apostar de manera responsable y dentro de sus posibilidades económicas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Enfoque en el Mercado Peruano</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Nos especializamos exclusivamente en el mercado peruano de apuestas deportivas. Esto nos permite
                comprender las necesidades específicas de los apostadores locales, incluyendo:
              </p>
              <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-2 mb-4 ml-4">
                <li>
                  Disponibilidad de métodos de pago locales como PagoEfectivo, Yape y transferencias bancarias peruanas
                </li>
                <li>Cobertura amplia de ligas y torneos de fútbol peruano</li>
                <li>Atención al cliente en español con horarios adaptados al uso horario peruano</li>
                <li>Bonificaciones y promociones relevantes para el mercado local</li>
                <li>Cumplimiento de regulaciones específicas del Perú</li>
              </ul>
            </section>

            <section className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestro Equipo</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Nuestro equipo está conformado por analistas expertos en apuestas deportivas con años de experiencia en
                el sector. Combinamos conocimiento técnico, pasión por el deporte y compromiso con la transparencia para
                ofrecer el mejor servicio de comparación del mercado peruano.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Cada miembro del equipo aporta perspectivas únicas sobre diferentes aspectos de las apuestas deportivas,
                desde análisis técnico de plataformas hasta evaluación de cuotas y mercados específicos.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Contacto</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Valoramos los comentarios y sugerencias de nuestra comunidad. Si tienes preguntas sobre nuestras
                evaluaciones, deseas reportar información desactualizada o simplemente quieres compartir tu experiencia
                con alguna casa de apuestas, no dudes en contactarnos.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-slate-900 font-semibold mb-2">Correo electrónico: contacto@sitiosdeapuestaspe.com</p>
                <p className="text-slate-700 text-sm">
                  Nos esforzamos por responder todas las consultas en un plazo de 24-48 horas hábiles.
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600">Última actualización: Noviembre 2025</p>
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
