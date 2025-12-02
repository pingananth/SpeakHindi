import { VideoProvider } from '@/types/video'

export const VIDEO_CONFIG = {
    // Set the default video provider (can be overridden by env var)
    provider: (process.env.NEXT_PUBLIC_VIDEO_PROVIDER as VideoProvider) || 'mux',

    // Mux configuration
    mux: {
        tokenId: process.env.MUX_TOKEN_ID,
        tokenSecret: process.env.MUX_TOKEN_SECRET,
    },

    // Vimeo configuration
    vimeo: {
        accessToken: process.env.VIMEO_ACCESS_TOKEN,
    },
} as const

export function getVideoProvider(): VideoProvider {
    return VIDEO_CONFIG.provider
}
