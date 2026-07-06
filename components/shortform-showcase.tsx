import Image from 'next/image'
import { Play } from 'lucide-react'

const clips = [
  {
    src: '/shortform-1.png',
    title: 'Founder Story — Ep. 14',
    meta: '4.2M views · TikTok',
  },
  {
    src: '/shortform-2.png',
    title: 'Rules I Live By',
    meta: '1.8M views · Reels',
  },
  {
    src: '/shortform-3.png',
    title: 'Podcast Highlight',
    meta: '3.1M views · Shorts',
  },
]

export function ShortformShowcase() {
  return (
    <section id="work" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              01 — Short-form
            </p>
            <h2 className="mt-4 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Built for the vertical feed.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Punchy, retention-obsessed edits and podcast clips engineered to stop the
            thumb and travel across every platform.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip) => (
            <article
              key={clip.title}
              className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-card"
            >
              <Image
                src={clip.src || '/placeholder.svg'}
                alt={clip.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-full bg-foreground/90 text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Play className="size-5 translate-x-0.5 fill-current" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  {clip.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{clip.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
