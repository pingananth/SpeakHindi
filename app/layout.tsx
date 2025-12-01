import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Hindi in English: Learn to Speak Hindi in 30 Days',
    description: 'The only structured, self-paced spoken hindi course online to learn Hindi in English. Speak in Hindi in 30 days.',
    keywords: ['learn hindi', 'speak hindi', 'hindi learning app', 'hindi via english', 'hindi conversation', 'online hindi course'],
    openGraph: {
        title: 'Hindi in English: Learn to Speak Hindi in 30 Days',
        description: 'The only structured, self-paced spoken hindi course online to learn Hindi in English. Speak in Hindi in 30 days.',
        type: 'website',
    },
    robots: 'index, follow',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
