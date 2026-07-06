import Link from 'next/link'

const groups = [
  {
    heading: 'Sitemap',
    links: [
      { href: '/', label: 'Home' },
      { href: '/#work', label: 'Work' },
      { href: '/#services', label: 'Services' },
      { href: '/about', label: 'About' },
    ],
  },
  {
    heading: 'Social',
    links: [
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'YouTube' },
      { href: '#', label: 'TikTok' },
      { href: '#', label: 'LinkedIn' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="font-mono text-2xl font-bold tracking-tight text-foreground">
              NARRATIVE<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              A visual storytelling agency helping brands go viral, one frame at a
              time.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/90 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Narrative Studio. All rights reserved.</p>
          <p className="font-mono">Visual storytelling, engineered for reach.</p>
        </div>
      </div>
    </footer>
  )
}
