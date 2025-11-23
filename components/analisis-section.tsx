import { Shield, TrendingUp, Award, CheckCircle2 } from "lucide-react"

export function AnalisisSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1084px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Deportes Disponibles para Apostar</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Las mejores casas de apuestas en Perú ofrecen una amplia variedad de deportes para que disfrutes apostando
            en tus eventos favoritos con las mejores cuotas del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Fútbol</h3>
            <p className="text-foreground mb-4">
              El deporte rey en Perú. Apuesta en la Liga 1, Copa Libertadores, Champions League, LaLiga, Premier League
              y todos los torneos internacionales.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Ligas nacionales e internacionales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Copas y torneos eliminatorios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Apuestas en vivo durante el partido</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/5 rounded-lg p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-4">Tenis</h3>
            <p className="text-foreground mb-4">
              Sigue los Grand Slam y torneos ATP/WTA durante todo el año. Apuesta en sets, juegos y marcadores exactos
              con excelentes cuotas.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span>Australian Open, Roland Garros, Wimbledon, US Open</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span>Torneos ATP Masters y WTA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span>Apuestas en vivo punto por punto</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Baloncesto</h3>
            <p className="text-foreground mb-4">
              NBA, Euroliga, FIBA y competiciones internacionales. Apuesta en líneas de puntos, totales y mercados
              especiales.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span>NBA temporada regular y playoffs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span>Euroliga y ligas europeas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span>Campeonatos mundiales FIBA</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Vóley</h3>
            <p className="text-foreground mb-4">
              Deporte muy popular en Perú. Sigue la Liga Nacional Superior de Voleibol y competencias internacionales
              con las mejores selecciones.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Liga Nacional de Vóley femenino y masculino</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Copa Panamericana y Sudamericana</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Campeonatos mundiales y olimpiadas</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/5 rounded-lg p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-accent mb-4">Esports</h3>
            <p className="text-foreground mb-4">
              El futuro de las apuestas. Counter-Strike, Dota 2, League of Legends y más juegos competitivos con torneos
              diarios.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span>CS2, Dota 2, LoL, Valorant</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span>Torneos internacionales diarios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                <span>Mercados especiales por mapa y ronda</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Otros Deportes</h3>
            <p className="text-foreground mb-4">
              Béisbol, hockey, fútbol americano, boxeo, MMA, carreras de autos, ciclismo y muchos deportes más
              disponibles las 24 horas.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span>MLB, NHL, NFL competiciones norteamericanas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span>UFC, boxeo y artes marciales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-secondary-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span>Fórmula 1, MotoGP y deportes de motor</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Criterios de Evaluación</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Seguridad</h4>
              <p className="text-sm text-muted-foreground">Licencias MINCETUR y protección de datos</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Cuotas</h4>
              <p className="text-sm text-muted-foreground">Comparación de odds en tiempo real</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Bonos</h4>
              <p className="text-sm text-muted-foreground">Promociones exclusivas para Perú</p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">Confianza</h4>
              <p className="text-sm text-muted-foreground">Reseñas verificadas de usuarios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
