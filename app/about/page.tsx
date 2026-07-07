import type { Metadata } from "next"
import Image from "next/image"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "About - Narrative",
  description:
    "Narrative is a visual storytelling agency built by editors, designers and strategists obsessed with attention. Meet the studio behind the scroll-stopping work.",
}

const values = [
  {
    title: "Attention is the product",
    body: "Every cut, caption and thumbnail is engineered around one goal: earning and keeping attention.",
  },
  {
    title: "Speed without compromise",
    body: "A 48-hour average turnaround means your content ships while the moment is still hot.",
  },
  {
    title: "Clip once, reach everywhere",
    body: "One podcast becomes dozens of high-quality clips, engineered for large-scale distribution across every platform.",
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Intro */}
        <section className="pt-32 pb-16 sm:pt-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              About the studio
            </p>
            <h1 className="mt-6 max-w-4xl text-balance font-mono text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl">
              We&apos;re editors, designers and strategists obsessed with attention.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Narrative started with a simple belief: the best story loses if nobody
              stops to watch it. So we built a studio dedicated to the craft of the
              scroll - from the first frame of a short to the thumbnail that earns the
              click.
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We push for higher-quality video edits that draw and hold attention, then
              turn every long-form podcast into a stream of clips built for large-scale
              distribution across every feed.
            </p>
          </div>
        </section>

        {/* Studio image */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border sm:aspect-[21/9]">
              <Image
                src="/studio.png"
                alt="Inside the Narrative editing studio"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-balance font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How we think about the work.
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
              {values.map((value, i) => (
                <div key={value.title} className="border-t border-border pt-6">
                  <span className="font-mono text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-mono text-2xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
