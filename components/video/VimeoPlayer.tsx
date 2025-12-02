'use client'

import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'
import { VideoPlayerProps } from '@/types/video'

export default function VimeoPlayer({
    source,
    title,
    autoPlay = false,
    onProgress,
    onComplete
}: VideoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<Player | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const player = new Player(containerRef.current, {
            id: parseInt(source.videoId),
            autoplay: autoPlay,
            color: 'f97316', // Orange accent
            title: true,
            byline: false,
            portrait: false,
        })

        playerRef.current = player

        // Track progress
        if (onProgress) {
            player.on('timeupdate', (data) => {
                const progress = (data.percent * 100)
                onProgress(progress)
            })
        }

        // Track completion
        if (onComplete) {
            player.on('ended', () => {
                onComplete()
            })
        }

        return () => {
            player.destroy()
        }
    }, [source.videoId, autoPlay, onProgress, onComplete])

    return (
        <div className="vimeo-player-wrapper">
            <div ref={containerRef} />

            <style jsx>{`
        .vimeo-player-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-neutral-gray-dark);
        }

        .vimeo-player-wrapper :global(iframe) {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
        }
      `}</style>
        </div>
    )
}
