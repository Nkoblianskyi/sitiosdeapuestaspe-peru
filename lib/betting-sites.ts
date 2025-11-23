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
    name: "Betsson",
    logo: "/betsson.png",
    rating: 9.8,
    destacado: "Apuesta Gratis S/50 + 10 Giros Gratis",
    descripcion: "Líder en apuestas deportivas con las mejores cuotas del mercado peruano",
    ventajas: ["Cuotas competitivas", "App móvil excelente", "Retiros rápidos"],
    isRecomendado: true,
    badgeText: "Nuestra Elección", // Added unique badge for rank 1
    url: "https://www.betsson.pe/",
    reviewsCount: 1284,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 2,
    name: "Betsafe",
    logo: "/betsafe.svg",
    rating: 9.7,
    destacado: "Bono de Bienvenida hasta S/70",
    descripcion: "Plataforma segura con amplia variedad de mercados deportivos",
    ventajas: ["Transmisiones en vivo", "Soporte 24/7", "Múltiples métodos de pago"],
    isRecomendado: true,
    badgeText: "Tendencia", // Added trending badge for rank 2
    url: "https://www.betsafe.pe/es",
    reviewsCount: 892,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 3,
    name: "CoolBet",
    logo: "/coolbet.svg",
    rating: 9.5,
    destacado: "Gana hasta S/200 en tu primer depósito",
    descripcion: "Interface moderna y experiencia de usuario excepcional",
    ventajas: ["Diseño intuitivo", "Estadísticas en tiempo real", "Cash out disponible"],
    isRecomendado: true,
    badgeText: "Mejor Bono", // Added best bonus badge for rank 3
    url: "https://www.coolbet.pe/pe",
    reviewsCount: 756,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 4,
    name: "Betcris",
    logo: "/betcris.png",
    rating: 9.3,
    destacado: "100% de bono en tu primer depósito",
    descripcion: "Experiencia consolidada en el mercado latinoamericano",
    ventajas: ["Cobertura extensa de ligas", "Promociones semanales", "Apuestas en vivo"],
    url: "https://www.betcris.pe/",
    reviewsCount: 623,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
  {
    rank: 5,
    name: "Inkabet",
    logo: "/inkabet-logo.svg",
    rating: 9.1,
    destacado: "S/50 de apuesta gratis en deportes",
    descripcion: "Casa de apuestas peruana con enfoque local",
    ventajas: ["Adaptada al mercado peruano", "Pagos en soles", "Atención personalizada"],
    url: "https://inkabet.pe/",
    reviewsCount: 521,
    terms: "T&C Aplican. +18. Juega responsablemente.", // Added terms
  },
]

export const getTopSite = (): BettingSite => {
  return bettingSites.find((site) => site.rank === 1) || bettingSites[0]
}
