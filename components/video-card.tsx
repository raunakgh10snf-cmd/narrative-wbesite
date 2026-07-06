"use client"

import { useState } from "react"
import { Play } from "lucide-react"

type VideoCardProps = {
  thumbnail: string
  videoUrl: string
  title: string
  aspect?: "video" | "portrait"
  sizes?: string
  priority?: boolean
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/,
  )
  return match ? match[1] : null
}

function getEmbedUrl(url: string): string | null {
  const youtubeId = getYouTubeId(url)
  if (youtubeId) {
    return "https://www.youtube.com/embed/" + youtubeId + "?autoplay=1"
  }
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return "https://player.vimeo.com/video/" + vimeoMatch[1] + "?autoplay=1"
  }
  return null
}

export function VideoCard({
  thumbnail,
  videoUrl,
  title,
  aspect = "video",
  sizes = "100vw",
  priority = false,
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const embedUrl = getEmbedUrl(videoUrl)
  const youtubeId = getYouTubeId(videoUrl)
  const displayThumbnail = youtubeId
    ? "https://img.youtube.com/vi/" + youtubeId + "/hqdefault.jpg"
    : thumbnail || "/placeholder.svg"
  const aspectClass = aspect === "portrait" ? "aspect-[9/16]" : "aspect-video"

  if (playing) {
    return (
      <div className={"relative " + aspectClass + " overflow-hidden rounded-xl border border-border bg-black"}>
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
      aria-label={"Play " + title}
      className={"group relative " + aspectClass + " w-full overflow-hidden rounded-xl border border-border bg-card"}
    >
      <img
        src={displayThumbnail}
        alt={title}
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
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
