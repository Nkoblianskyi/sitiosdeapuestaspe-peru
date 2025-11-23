import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/peru-sports-celebration.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <main className="relative z-10 max-w-[1084px] mx-auto px-4 py-12 pt-32">
        <Link
          href="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors font-semibold"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Política de Cookies</h1>
          <p className="text-gray-600 mb-8">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                En sitiosdeapuestaspe.com, utilizamos cookies y tecnologías similares para mejorar su experiencia de
                navegación, analizar el tráfico del sitio y personalizar el contenido. Esta política explica qué son las
                cookies, cómo las utilizamos y cómo puede controlarlas.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. ¿Qué son las cookies?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tablet o
                móvil) cuando visita un sitio web. Estas cookies permiten que el sitio web reconozca su dispositivo y
                recuerde información sobre su visita, como su idioma preferido y otras configuraciones.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Las cookies son ampliamente utilizadas para hacer que los sitios web funcionen de manera más eficiente y
                proporcionar información útil a los propietarios del sitio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Tipos de cookies que utilizamos</h2>

              <div className="mb-6 p-6 bg-red-50 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Cookies Estrictamente Necesarias</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus funciones. Sin
                  estas cookies, servicios como recordar sus preferencias de cookies no pueden proporcionarse.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Duración:</strong> Sesión y hasta 12 meses
                </p>
              </div>

              <div className="mb-6 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">Cookies de Rendimiento y Análisis</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Estas cookies recopilan información sobre cómo los visitantes utilizan nuestro sitio web, como qué
                  páginas visitan con más frecuencia y si reciben mensajes de error. Toda la información que recopilan
                  estas cookies es agregada y, por lo tanto, anónima.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Ejemplos:</strong> Google Analytics, herramientas de análisis de tráfico
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Duración:</strong> Hasta 24 meses
                </p>
              </div>

              <div className="mb-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Cookies de Funcionalidad</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Estas cookies permiten que el sitio web recuerde las elecciones que realiza (como su nombre de
                  usuario, idioma o región) y proporcionen características mejoradas y más personales. También pueden
                  utilizarse para proporcionar servicios que ha solicitado, como ver un vídeo o comentar en un blog.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Duración:</strong> Hasta 12 meses
                </p>
              </div>

              <div className="mb-6 p-6 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Cookies de Publicidad y Marketing</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Estas cookies se utilizan para mostrar anuncios que sean relevantes para usted y sus intereses.
                  También se utilizan para limitar el número de veces que ve un anuncio, así como para ayudar a medir la
                  efectividad de las campañas publicitarias.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Duración:</strong> Hasta 24 meses
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies de terceros</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Algunos de nuestros socios comerciales pueden establecer cookies en su dispositivo cuando visita nuestro
                sitio web. Esto puede incluir redes publicitarias, proveedores de análisis y redes sociales. No
                controlamos estas cookies de terceros y le recomendamos que revise las políticas de privacidad de estos
                terceros para obtener más información.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Ejemplos de servicios de terceros:</strong>
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Google Analytics: análisis de tráfico web</li>
                <li>Plataformas de redes sociales: para compartir contenido</li>
                <li>Servicios de publicidad: para mostrar anuncios relevantes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cómo gestionar las cookies</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tiene derecho a decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de cookies
                utilizando el banner de consentimiento de cookies que aparece cuando visita nuestro sitio por primera
                vez.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                También puede configurar o modificar los controles de su navegador web para aceptar o rechazar cookies.
                Si decide rechazar las cookies, aún puede utilizar nuestro sitio web, aunque su acceso a algunas
                funcionalidades y áreas puede verse limitado.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gestión de cookies por navegador:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferencias → Privacidad → Cookies
                  </li>
                  <li>
                    <strong>Microsoft Edge:</strong> Configuración → Privacidad → Cookies
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Actualizaciones de esta política</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que
                utilizamos o por otras razones operativas, legales o reglamentarias. Revise esta página regularmente
                para mantenerse informado sobre nuestro uso de cookies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas o inquietudes sobre nuestra Política de Cookies o sobre cómo procesamos sus datos,
                puede contactarnos a través de la información proporcionada en nuestra página de contacto.
              </p>
            </section>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-10">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-red-600">Importante:</strong> Al continuar navegando por nuestro sitio web,
                acepta el uso de cookies de acuerdo con esta política. Si no está de acuerdo con el uso de cookies, debe
                ajustar la configuración de su navegador o abstenerse de utilizar nuestro sitio.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
