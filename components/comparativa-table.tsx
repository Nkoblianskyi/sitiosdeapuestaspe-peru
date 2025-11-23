"use client"

import { bettingSites } from "@/lib/betting-sites"
import { BettingSiteCard } from "@/components/betting-site-card"

export function ComparativaTable() {
  return (
    <section className="py-4 md:py-8">
      <div className="max-w-[1084px] mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {bettingSites.map((site) => (
              <BettingSiteCard key={site.rank} site={site} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
