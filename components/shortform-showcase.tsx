import { VideoCard } from "./video-card"

const clips = [
  { src: "/shortform-1.png", video: "https://youtube.com/shorts/u5GR8y8nmKE", title: "", meta: "" },
  { src: "/shortform-2.png", video: "https://youtube.com/shorts/oeANkfu9920", title: "", meta: "" },
  { src: "/shortform-3.png", video: "https://youtube.com/shorts/p4PqDTIz8X8", title: "", meta: "" },
]

export function ShortformShowcase() {
  return (
    <section id="work" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              01 - Short-form
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
          {clips.map((clip, i) => (
            <article key={i} className="group relative">
              <VideoCard
                thumbnail={clip.src}
                videoUrl={clip.video}
                title={clip.title}
                aspect="portrait"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
