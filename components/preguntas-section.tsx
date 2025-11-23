"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Las apuestas deportivas son legales en Perú?",
    answer:
      "Sí, las apuestas deportivas son completamente legales en Perú. El Ministerio de Comercio Exterior y Turismo (MINCETUR) regula y supervisa todas las operaciones de apuestas en el país. Todas las plataformas recomendadas en nuestro sitio cuentan con las licencias necesarias.",
  },
  {
    question: "¿Cómo puedo empezar a apostar en línea?",
    answer:
      "Para comenzar, debes registrarte en una casa de apuestas autorizada, verificar tu identidad, realizar un depósito inicial y luego podrás empezar a realizar tus apuestas. La mayoría de plataformas ofrecen bonos de bienvenida para nuevos usuarios.",
  },
  {
    question: "¿Qué métodos de pago están disponibles?",
    answer:
      "Las casas de apuestas en Perú aceptan diversos métodos: transferencias bancarias, tarjetas de crédito/débito, billeteras digitales como Yape y Plin, y otros métodos locales. Los depósitos suelen ser instantáneos y los retiros procesados en 24-48 horas.",
  },
  {
    question: "¿Puedo apostar desde mi celular?",
    answer:
      "Sí, todas las plataformas recomendadas tienen versiones móviles optimizadas o aplicaciones nativas para iOS y Android. Puedes apostar cómodamente desde cualquier lugar con conexión a internet.",
  },
  {
    question: "¿Qué deportes puedo apostar?",
    answer:
      "Las casas de apuestas en Perú ofrecen una amplia variedad: fútbol local e internacional, tenis, básquetbol, vóley, eSports, y muchos más. El fútbol peruano y las competiciones sudamericanas son especialmente populares.",
  },
  {
    question: "¿Cómo puedo apostar de forma responsable?",
    answer:
      "Establece límites de depósito y tiempo, nunca apuestes más de lo que puedes permitirte perder, y considera las apuestas como entretenimiento, no como una fuente de ingresos. Todas las plataformas ofrecen herramientas de juego responsable.",
  },
]

export function PreguntasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-[1084px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-slate-600">Todo lo que necesitas saber sobre apuestas deportivas en Perú</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && <div className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
