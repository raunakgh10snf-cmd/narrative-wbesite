import { HoverVideoCard } from './hover-video-card'

const clips = [
  {
    video: '/shortform-1.mp4',
    title: 'Founder Story — Ep. 14',
    meta: '4.2M views · TikTok',
  },
  {
    video: '/shortform-2.mp4',
    title: 'Rules I Live By',
    meta: '1.8M views · Reels',
  },
  {
    video: '/shortform-3.mp4',
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
            <article key={clip.title} className="group">
              <HoverVideoCard videoUrl={clip.video} title={clip.title} aspect="portrait" />
              <div className="mt-3">
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
