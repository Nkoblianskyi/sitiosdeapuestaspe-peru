export interface BettingSite {
  rank: number
  name: string
  logo: string
  rating: number
  destacado: string
  descripcion: string
  ventajas: string[]
  isRecomendado?: boolean
  badgeText?: string // Added badge text property
  url: string
  reviewsCount: number
  terms: string // Added terms field for modal display
}

export const bettingSites: BettingSite[] = [
  {
    rank: 1,
    name: "Inkabet",
    logo: "/inkabet-logo.svg",
    rating: 9.7,
    destacado: "S/50 en Apuesta Gratis para Deportes",
    descripcion: "Casa de apuestas peruana con enfoque local",
    ventajas: ["Adaptada al mercado peruano", "Pagos en soles", "Atención personalizada"],
    url: "https://inkabet.pe/",
    badgeText: "Nuestra Elección",
    reviewsCount: 1521,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },

  {
    rank: 2,
    name: "Betsafe",
    logo: "/betsafe.svg",
    rating: 9.5,
    destacado: "¡Oferta de Bienvenida de S/70!",
    descripcion: "Plataforma segura con amplia variedad de mercados deportivos",
    ventajas: ["Transmisiones en vivo", "Soporte 24/7", "Múltiples métodos de pago"],
    isRecomendado: true,
    badgeText: "Tendencia", // Added trending badge for rank 2
    url: "https://www.betsafe.pe/es",
    reviewsCount: 1892,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 3,
    name: "CoolBet",
    logo: "/coolbet.svg",
    rating: 9.4,
    destacado: "Gana Hasta S/200",
    descripcion: "Interface moderna y experiencia de usuario excepcional",
    ventajas: ["Diseño intuitivo", "Estadísticas en tiempo real", "Cash out disponible"],
    isRecomendado: true,
    badgeText: "Mejor Bono", // Added best bonus badge for rank 3
    url: "https://www.coolbet.pe/pe",
    reviewsCount: 1756,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 4,
    name: "Betsson",
    logo: "/betsson.png",
    rating: 9.2,
    destacado: "¡Apuesta Gratis de S/50 y 10 Giros Gratis con tu Primer Depósito!",
    descripcion: "Líder en apuestas deportivas con las mejores cuotas del mercado peruano",
    ventajas: ["Cuotas competitivas", "App móvil excelente", "Retiros rápidos"],
    isRecomendado: true,
    // Added unique badge for rank 1
    url: "https://www.betsson.pe/",
    reviewsCount: 1284,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 5,
    name: "Betcris",
    logo: "/betcris.png",
    rating: 9.0,
    destacado: "Recibe el 100% Extra de tu Primer Depósito",
    descripcion: "Experiencia consolidada en el mercado latinoamericano",
    ventajas: ["Cobertura extensa de ligas", "Promociones semanales", "Apuestas en vivo"],
    url: "https://www.betcris.pe/",
    reviewsCount: 1623,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },

]

export const getTopSite = (): BettingSite => {
  return bettingSites.find((site) => site.rank === 1) || bettingSites[0]
}
