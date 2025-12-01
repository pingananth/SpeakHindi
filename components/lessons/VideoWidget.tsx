'use client'

import { Lesson } from '@/lib/lessons-config'

interface VideoWidgetProps {
    lesson: Lesson
}

export default function VideoWidget({ lesson }: VideoWidgetProps) {
    // TODO: Replace with actual video URL from lesson config or Contentful
    const videoUrl = lesson.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ'

    return (
        <section className="video-section">
            <h2 className="section-title">📹 Lesson Video</h2>
            <p className="section-description">
                Watch the full lesson video. Take notes and pause as needed. This video is optimized for learning Hindi through English.
            </p>

            <div className="video-container">
                <div className="video-wrapper">
                    <iframe
                        src={videoUrl}
                        title={lesson.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-iframe"
                    />
                </div>
            </div>

            <div className="video-controls">
                <button className="control-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 5.83333C2.5 4.91286 3.24619 4.16667 4.16667 4.16667H15.8333C16.7538 4.16667 17.5 4.91286 17.5 5.83333V14.1667C17.5 15.0871 16.7538 15.8333 15.8333 15.8333H4.16667C3.24619 15.8333 2.5 15.0871 2.5 14.1667V5.83333Z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M2.5 8.33333H17.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Mark as Watched
                </button>
                <button className="control-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4.16667V10L13.3333 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Speed: 1x
                </button>
            </div>

            <style jsx>{`
        .video-section {
          background: var(--color-neutral-white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
          border: 2px solid var(--color-neutral-gray);
        }

        .section-title {
          font-family: var(--font-headline);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-sm);
        }

        .section-description {
          color: var(--color-primary-blue);
          opacity: 0.7;
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
        }

        .video-container {
          background: #000;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: var(--spacing-lg);
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-controls {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .control-button {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: 0.75rem 1.5rem;
          background: var(--color-neutral-gray);
          color: var(--color-primary-blue);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          font-family: var(--font-headline-alt);
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .control-button:hover {
          background: var(--color-teal);
          color: var(--color-neutral-white);
          border-color: var(--color-teal);
        }

        .control-button svg {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .video-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }

          .control-button {
            font-size: 0.875rem;
            padding: 0.625rem 1.25rem;
          }
        }
      `}</style>
        </section>
    )
}
