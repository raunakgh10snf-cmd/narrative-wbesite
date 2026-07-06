import { VideoCard } from './video-card'

const videos = [
  {
    src: '/longform-1.png',
    video: 'https://www.youtube.com/watch?v=REPLACE_WITH_ID', // or a direct .mp4 URL
    title: 'The Truth About Success',
    meta: '2:14 · Podcast trailer',
    views: '2.9M views',
  },
  {
    src: '/longform-2.png',
    video: 'https://www.youtube.com/watch?v=REPLACE_WITH_ID',
    title: 'Behind The Story',
    meta: '16:40 · YouTube video',
    views: '1.1M views',
  },
  {
    src: '/longform-3.png',
    video: 'https://www.youtube.com/watch?v=REPLACE_WITH_ID',
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
              <VideoCard
                thumbnail={video.src}
                videoUrl={video.video}
                title={video.title}
                aspect="video"
                sizes={i === 0 ? '100vw' : '(max-width: 1024px) 100vw, 50vw'}
              />
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
