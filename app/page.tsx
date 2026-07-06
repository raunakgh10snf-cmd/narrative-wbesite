import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { ShortformShowcase } from '@/components/shortform-showcase'
import { LongformShowcase } from '@/components/longform-showcase'
import { Services } from '@/components/services'
import { CTA } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <ShortformShowcase />
        <LongformShowcase />
        <Services />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
