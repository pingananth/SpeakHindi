'use client'

import { useEffect } from 'react'

// Google Analytics event tracking utility
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

export default function Analytics() {
    useEffect(() => {
        // Track page view on mount
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'page_view', {
                page_path: window.location.pathname,
            })
        }
    }, [])

    return null
}
