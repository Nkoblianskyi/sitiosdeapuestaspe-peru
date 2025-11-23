"use client"

import Image from "next/image"
import type { BettingSite } from "@/lib/betting-sites"
import { Star, ChevronRight } from "lucide-react"

interface BettingSiteCardProps {
  site: BettingSite
}

export function BettingSiteCard({ site }: BettingSiteCardProps) {
  const renderStars = () => {
    const stars = []
    const maxRating = 10
    const maxStars = 5
    const ratingPerStar = maxRating / maxStars // 2 points per star

    for (let i = 0; i < maxStars; i++) {
      const starThreshold = (i + 1) * ratingPerStar
      const previousThreshold = i * ratingPerStar

      if (site.rating >= starThreshold) {
        stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
      } else if (site.rating > previousThreshold) {
        const fillPercentage = ((site.rating - previousThreshold) / ratingPerStar) * 100
        stars.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="h-5 w-5 text-muted-foreground/30 absolute" />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-primary text-primary" />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-muted-foreground/30" />)
      }
    }
    return stars
  }

  return (
    <article className="group relative bg-card border border-border hover:border-primary/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      {site.isRecomendado && site.badgeText && (
        <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-br-lg uppercase tracking-wide z-10">
          {site.badgeText}
        </div>
      )}

      <div className="p-8">
        {/* Desktop Layout */}
        <div className="hidden md:block space-y-4">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Rank number */}
            <div className="col-span-1 flex items-center justify-center">
              <div className="text-3xl font-bold text-muted-foreground">#{site.rank}</div>
            </div>

            {/* Logo */}
            <div className="col-span-3 flex items-center justify-center bg-black p-2 rounded-lg">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={`${site.name} logo`}
                width={196}
                height={96} 
                className="h-24 w-auto object-contain"
              />
            </div>

            <div className="col-span-3 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center">
                  Oferta de Bienvenida
                </div>
                <div className="text-xl font-semibold text-primary text-center">{site.destacado}</div>
              </div>
            </div>

            {/* Rating with stars and reviews */}
            <div className="col-span-2 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-bold text-foreground">{site.rating}</span>
                <div className="flex items-center gap-0.5">{renderStars()}</div>
                <span className="text-xs text-muted-foreground">({site.reviewsCount} opiniones)</span>
              </div>
            </div>

            {/* CTA button */}
            <div className="col-span-3 flex items-center justify-center">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors group-hover:gap-3 text-base"
              >
                Visitar
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">{site.terms}</p>
          </div>
        </div>

        <div className="md:hidden space-y-4">
          {/* Row 1: Logo and Bonus */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={`${site.name} logo`}
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Bono</div>
              <div className="text-xl font-semibold text-primary leading-tight">{site.destacado}</div>
            </div>
          </div>

          {/* Row 2: Rating, Stars (separate column), and Button */}
          <div className="grid grid-cols-3 gap-2 items-center">
            {/* Rating score */}
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-foreground">{site.rating}</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-0.5 scale-75 sm:scale-100 origin-center">{renderStars()}</div>
              <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                ({site.reviewsCount})
              </span>
            </div>

            {/* CTA button */}
            <div className="flex items-center justify-end">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-xs"
              >
                Visitar
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Row 3: Terms */}
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center pt-2 border-t border-border leading-tight">
            {site.terms}
          </p>
        </div>
      </div>
    </article>
  )
}
