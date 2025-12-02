export type VideoProvider = 'mux' | 'vimeo'

export interface VideoSource {
    provider: VideoProvider
    videoId: string
    playbackId?: string // For Mux
    thumbnail?: string
}

export interface VideoPlayerProps {
    source: VideoSource
    title?: string
    autoPlay?: boolean
    onProgress?: (progress: number) => void
    onComplete?: () => void
}

export interface VideoAnalytics {
    watchTime: number
    completionRate: number
    lastPosition: number
}
