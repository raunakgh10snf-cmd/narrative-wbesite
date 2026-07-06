'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

type VideoCardProps = {
  thumbnail: string
  videoUrl: string
  title: string
  aspect?: 'video' | 'portrait' // 'video' = 16:9, 'portrait' = 9:16
  sizes?: string
  priority?: boolean
}

// Turns a normal YouTube/Vimeo link into an embeddable URL.
// Returns null if it's not a recognized embed link (e.g. a direct .mp4 file).
function getEmbedUrl(url: string): string | null {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/,
  )
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`
  }

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
  }

  return null
}

export function VideoCard({
  thumbnail,
  videoUrl,
  title,
  aspect = 'video',
  sizes = '100vw',
  priority = false,
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const embedUrl = getEmbedUrl(videoUrl)
  const aspectClass = aspect === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'

  if (playing) {
    return (
      <div className={`relative ${aspectClass} overflow-hidden rounded-xl border border-border bg-black`}>
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="absolute inset-0 size-full object-cover"
          />
        )}
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className={`group relative ${aspectClass} w-full overflow-hidden rounded-xl border border-border bg-card`}
    >
      <Image
        src={thumbnail || '/placeholder.svg'}
        alt={title}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex size-14 items-center justify-center rounded-full bg-foreground/90 text-background">
          <Play className="size-5 translate-x-0.5 fill-current" />
        </span>
      </div>
    </button>
  )
}
