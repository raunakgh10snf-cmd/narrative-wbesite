import { Scissors, Mic, ImageIcon, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Short-form editing',
    description:
      'Retention-first vertical edits for TikTok, Reels and Shorts — captions, sound design and pacing that hook in the first second.',
  },
  {
    icon: Mic,
    title: 'Podcast clipping',
    description:
      'We mine your long episodes for the moments that pop and turn them into a steady stream of shareable, on-brand clips.',
  },
  {
    icon: ImageIcon,
    title: 'Thumbnail design',
    description:
      'Scroll-stopping, high-CTR thumbnails backed by testing — the difference between a click and a scroll.',
  },
  {
    icon: TrendingUp,
    title: 'Brand virality',
    description:
      'A content engine and posting strategy engineered to compound reach and turn attention into real audience growth.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            What we do
          </p>
          <h2 className="mt-4 text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            One team for your entire content engine.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-secondary sm:p-10"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="font-mono text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
