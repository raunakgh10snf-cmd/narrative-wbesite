import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Let&apos;s make it move
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl text-balance font-mono text-4xl font-bold leading-[1] tracking-tight text-foreground sm:text-7xl">
          Ready to tell a story worth sharing?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Tell us about your brand and we&apos;ll show you what your content could
          become.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:narrative@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            narrative@gmail.com
            <ArrowUpRight className="size-4" />
          </a>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Learn about us
          </Link>
        </div>
      </div>
    </section>
  )
}
