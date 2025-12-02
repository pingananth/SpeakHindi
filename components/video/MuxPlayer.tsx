'use client'

import MuxPlayerReact from '@mux/mux-player-react'
import { VideoPlayerProps } from '@/types/video'

export default function MuxPlayer({
    source,
    title,
    autoPlay = false,
    onProgress,
    onComplete
}: VideoPlayerProps) {
    const handleTimeUpdate = (e: any) => {
        if (onProgress && e.target) {
            const progress = (e.target.currentTime / e.target.duration) * 100
            onProgress(progress)
        }
    }

    const handleEnded = () => {
        if (onComplete) {
            onComplete()
        }
    }

    return (
        <div className="mux-player-wrapper">
            <MuxPlayerReact
                playbackId={source.playbackId || source.videoId}
                metadata={{
                    video_title: title,
                }}
                autoPlay={autoPlay}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                streamType="on-demand"
                accentColor="#f97316"
            />

            <style jsx>{`
        .mux-player-wrapper {
          position: relative;
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-neutral-gray-dark);
        }

        .mux-player-wrapper :global(mux-player) {
          width: 100%;
          height: auto;
        }
      `}</style>
        </div>
    )
}
