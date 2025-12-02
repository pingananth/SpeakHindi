'use client'

import { VideoPlayerProps } from '@/types/video'
import MuxPlayer from './MuxPlayer'
import VimeoPlayer from './VimeoPlayer'
import { getVideoProvider } from '@/lib/video-config'

export default function VideoPlayer(props: VideoPlayerProps) {
    // Use provider from source, or fall back to global config
    const provider = props.source.provider || getVideoProvider()

    switch (provider) {
        case 'mux':
            return <MuxPlayer {...props} />
        case 'vimeo':
            return <VimeoPlayer {...props} />
        default:
            return (
                <div className="video-error">
                    <p>Unsupported video provider: {provider}</p>
                    <style jsx>{`
            .video-error {
              padding: var(--spacing-xl);
              text-align: center;
              background: var(--color-neutral-gray);
              border-radius: var(--radius-md);
              color: var(--color-primary-blue);
            }
          `}</style>
                </div>
            )
    }
}
