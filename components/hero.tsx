import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-block size-2 rounded-full bg-accent" />
          Visual storytelling agency
        </div>
        <h1 className="mt-8 text-balance font-mono text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[8.5rem]">
          Stories that
          <br />
          <span className="text-muted-foreground">refuse to be</span>
          <br />
          <span className="text-accent">scrolled past.</span>
        </h1>
        <div className="mt-10 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We turn raw footage into scroll-stopping short-form edits, binge-worthy
            long-form, podcast clips, and thumbnails engineered to make brands go
            viral.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              See our work
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
