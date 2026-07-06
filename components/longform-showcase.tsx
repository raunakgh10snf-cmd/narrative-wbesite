import Image from 'next/image'
import { Play } from 'lucide-react'

const videos = [
  {
    src: '/longform-1.png',
    title: 'The Truth About Success',
    meta: '2:14 · Podcast trailer',
    views: '2.9M views',
  },
  {
    src: '/longform-2.png',
    title: 'Behind The Story',
    meta: '16:40 · YouTube video',
    views: '1.1M views',
  },
  {
    src: '/longform-3.png',
    title: 'Scaling Revenue Ops',
    meta: '9:52 · B2B video',
    views: '480K views',
  },
]

export function LongformShowcase() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              02 — Long-form
            </p>
            <h2 className="mt-4 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Stories with staying power.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Podcast trailers, YouTube videos and B2B content — cinematic long-form edits
            paced to hold attention from the first frame to the final CTA.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videos.map((video, i) => (
            <article
              key={video.title}
              className={`group ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src={video.src || '/placeholder.svg'}
                  alt={video.title}
                  fill
                  sizes={i === 0 ? '100vw' : '(max-width: 1024px) 100vw, 50vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex size-16 items-center justify-center rounded-full bg-foreground/90 text-background">
                    <Play className="size-6 translate-x-0.5 fill-current" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-xl font-semibold text-foreground">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{video.meta}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-muted-foreground">
                  {video.views}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
