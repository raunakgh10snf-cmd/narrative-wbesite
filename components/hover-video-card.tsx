'use client'

import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

type HoverVideoCardProps = {
  videoUrl: string
  title: string
  aspect?: 'video' | 'portrait' // 'video' = 16:9, 'portrait' = 9:16
}

export function HoverVideoCard({ videoUrl, title, aspect = 'portrait' }: HoverVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const aspectClass = aspect === 'portrait' ? 'aspect-[9/16]' : 'aspect-video'

  const handleEnter = () => {
    const v = videoRef.current
    if (v) v.play().catch(() => {})
  }

  const handleLeave = () => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  // Mobile has no hover, so tapping the card toggles play/pause instead.
  const handleTap = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMuted((m) => !m)
  }

  return (
    <div
      className={`group relative ${aspectClass} w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-black`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleTap}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={title}
        className="absolute inset-0 size-full object-cover"
      />

      {/* subtle darken on hover so the mute button stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-black/70 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
      >
        {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      </button>
    </div>
  )
}
