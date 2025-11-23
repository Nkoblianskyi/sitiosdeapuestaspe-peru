import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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

      <div className="relative z-10">
        <main className="max-w-[1084px] mx-auto px-4 py-12 pt-32">
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 transition-colors font-semibold"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Política de Privacidad</h1>
            <p className="text-gray-600 mb-8">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  En sitiosdeapuestaspe.com, respetamos su privacidad y estamos comprometidos con la protección de sus
                  datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y
                  protegemos su información cuando visita nuestro sitio web.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Cumplimos con la Ley de Protección de Datos Personales del Perú (Ley N° 29733) y su reglamento, así
                  como con otras regulaciones aplicables de privacidad y protección de datos.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que recopilamos</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">
                    2.1 Información proporcionada directamente por usted
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Podemos recopilar información personal que usted nos proporciona voluntariamente cuando:
                  </p>
                  <ul className="text-gray-700 list-disc pl-6 space-y-2 mb-4">
                    <li>Se suscribe a nuestro boletín informativo</li>
                    <li>Completa formularios de contacto</li>
                    <li>Participa en encuestas o promociones</li>
                    <li>Se comunica con nosotros por cualquier medio</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Esta información puede incluir: nombre, dirección de correo electrónico, número de teléfono,
                    preferencias de comunicación y cualquier otra información que decida compartir.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">
                    2.2 Información recopilada automáticamente
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    Cuando visita nuestro sitio web, recopilamos automáticamente cierta información, que incluye:
                  </p>
                  <ul className="text-gray-700 list-disc pl-6 space-y-2">
                    <li>Dirección IP y ubicación geográfica aproximada</li>
                    <li>Tipo de navegador y sistema operativo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Sitio web de referencia</li>
                    <li>Fecha y hora de las visitas</li>
                    <li>Información del dispositivo</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">2.3 Cookies y tecnologías similares</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Utilizamos cookies y tecnologías similares para mejorar su experiencia. Para más información,
                    consulte nuestra{" "}
                    <Link href="/politica-cookies" className="text-red-600 hover:text-red-700 underline">
                      Política de Cookies
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo utilizamos su información</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Utilizamos la información personal recopilada para los siguientes propósitos:
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Proporcionar y mejorar nuestros servicios</h4>
                    <p className="text-gray-700 text-sm">
                      Operar, mantener y mejorar nuestro sitio web y los servicios que ofrecemos, incluyendo
                      comparativas de casas de apuestas y recomendaciones personalizadas.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Comunicación</h4>
                    <p className="text-gray-700 text-sm">
                      Enviarle información sobre nuevas casas de apuestas, bonos exclusivos, actualizaciones del sitio y
                      otros contenidos relevantes que puedan interesarle.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Análisis y estadísticas</h4>
                    <p className="text-gray-700 text-sm">
                      Analizar el uso del sitio web para entender las preferencias de nuestros usuarios y mejorar
                      continuamente nuestro contenido y funcionalidad.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Seguridad y cumplimiento legal</h4>
                    <p className="text-gray-700 text-sm">
                      Detectar, prevenir y abordar problemas técnicos, fraude y otras actividades ilegales. Cumplir con
                      obligaciones legales y regulatorias aplicables.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing y publicidad</h4>
                    <p className="text-gray-700 text-sm">
                      Mostrar publicidad relevante y personalizada basada en sus intereses y comportamiento de
                      navegación.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir su información</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información en las
                  siguientes circunstancias:
                </p>
                <ul className="text-gray-700 list-disc pl-6 space-y-3 mb-4">
                  <li>
                    <strong>Proveedores de servicios:</strong> Con empresas que nos ayudan a operar nuestro sitio web,
                    como proveedores de alojamiento, análisis y servicios de marketing.
                  </li>
                  <li>
                    <strong>Socios comerciales:</strong> Con casas de apuestas asociadas cuando hace clic en sus enlaces
                    o se registra en sus servicios a través de nuestro sitio.
                  </li>
                  <li>
                    <strong>Cumplimiento legal:</strong> Cuando sea necesario para cumplir con la ley, regulaciones,
                    procesos legales o solicitudes gubernamentales.
                  </li>
                  <li>
                    <strong>Protección de derechos:</strong> Para proteger nuestros derechos, privacidad, seguridad o
                    propiedad, así como los de nuestros usuarios.
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de los datos</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra
                  el acceso no autorizado, la alteración, divulgación o destrucción. Estas medidas incluyen:
                </p>
                <ul className="text-gray-700 list-disc pl-6 space-y-2">
                  <li>Cifrado de datos en tránsito mediante SSL/TLS</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de sistemas de seguridad</li>
                  <li>Capacitación del personal en prácticas de privacidad</li>
                  <li>Procedimientos de respuesta a incidentes de seguridad</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sus derechos</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  De acuerdo con la legislación peruana de protección de datos, usted tiene los siguientes derechos:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Acceso</h4>
                    <p className="text-gray-700 text-sm">
                      Derecho a saber qué información personal tenemos sobre usted y obtener una copia.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Rectificación</h4>
                    <p className="text-gray-700 text-sm">
                      Derecho a corregir información personal inexacta o incompleta.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cancelación</h4>
                    <p className="text-gray-700 text-sm">
                      Derecho a solicitar la eliminación de su información personal.
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Oposición</h4>
                    <p className="text-gray-700 text-sm">
                      Derecho a oponerse al procesamiento de sus datos para ciertos fines.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Para ejercer estos derechos, puede contactarnos utilizando la información proporcionada en la sección
                  de contacto.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de datos</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos
                  para los cuales se recopiló, incluidos los requisitos legales, contables o de informes. Cuando ya no
                  necesitemos utilizar su información, la eliminaremos de nuestros sistemas de forma segura.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Enlaces a sitios de terceros</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nuestro sitio web contiene enlaces a sitios web de casas de apuestas y otros terceros. No somos
                  responsables de las prácticas de privacidad de estos sitios externos. Le recomendamos que lea las
                  políticas de privacidad de cualquier sitio web de terceros que visite.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Menores de edad</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nuestro sitio web está destinado únicamente a personas mayores de 18 años. No recopilamos
                  intencionalmente información personal de menores. Si descubrimos que hemos recopilado inadvertidamente
                  información de un menor, la eliminaremos de inmediato.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Juego responsable</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Promovemos el juego responsable y proporcionamos información sobre recursos de ayuda para personas con
                  problemas relacionados con las apuestas. Las apuestas deben ser una forma de entretenimiento, no una
                  fuente de ingresos.
                </p>
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <p className="text-gray-700 font-semibold mb-2">Si necesita ayuda:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>GamCare: Recursos y apoyo para el juego responsable</li>
                    <li>BeGambleAware: Información y asistencia</li>
                    <li>MINCETUR: Información sobre regulación de juegos en Perú</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios a esta política</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras
                  prácticas o por razones legales, operativas o regulatorias. La fecha de la última actualización se
                  indica en la parte superior de esta página. Le recomendamos que revise esta política regularmente.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o nuestras
                  prácticas de manejo de datos, puede contactarnos:
                </p>
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    <strong>Sitio web:</strong> sitiosdeapuestaspe.com
                  </p>
                  <p className="text-gray-700 mt-2">
                    Responderemos a su consulta lo antes posible, generalmente dentro de los 30 días hábiles.
                  </p>
                </div>
              </section>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-10">
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong className="text-red-600">Advertencia importante:</strong>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  El juego puede ser adictivo. Juegue responsablemente y solo con dinero que pueda permitirse perder.
                  Las apuestas están prohibidas para menores de 18 años. Este sitio proporciona información comparativa
                  sobre casas de apuestas legalmente autorizadas en Perú.
                </p>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
