const items = [
  'Short-form editing',
  'Podcast clipping',
  'Thumbnail design',
  'Brand virality',
  'Long-form editing',
  'Content strategy',
]

export function Marquee() {
  return (
    <section className="border-y border-border bg-secondary/40 py-5" aria-hidden="true">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-mono text-2xl font-medium text-foreground/80">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-mono text-2xl font-medium text-foreground/80">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
