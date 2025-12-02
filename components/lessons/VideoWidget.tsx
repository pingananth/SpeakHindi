'use client'

import { Lesson } from '@/lib/lessons-config'
import VideoPlayer from '@/components/video/VideoPlayer'
import { VideoSource } from '@/types/video'

interface VideoWidgetProps {
  lesson: Lesson
}

export default function VideoWidget({ lesson }: VideoWidgetProps) {
  // Check if lesson has video data
  if (!lesson.videoUrl && !lesson.videoId) {
    return (
      <section className="video-section">
        <div className="no-video-message">
          <p>📹 No video available for this lesson yet.</p>
        </div>
        <style jsx>{`
                    .video-section {
                        background: var(--color-neutral-gray);
                        border-radius: var(--radius-lg);
                        padding: var(--spacing-2xl);
                        margin-bottom: var(--spacing-2xl);
                        text-align: center;
                    }
                    .no-video-message {
                        color: var(--color-primary-blue);
                        opacity: 0.7;
                    }
                `}</style>
      </section>
    )
  }

  // Create video source from lesson data
  const videoSource: VideoSource = {
    provider: lesson.videoProvider || 'vimeo',
    videoId: lesson.videoId || '',
    playbackId: lesson.playbackId,
  }

  return (
    <section className="video-section">
      <h2 className="section-title">📹 Lesson Video</h2>
      <p className="section-description">
        Watch the full lesson video. Take notes and pause as needed. Use the speed controls to adjust playback speed.
      </p>

      <div className="video-container">
        <VideoPlayer
          source={videoSource}
          title={lesson.title}
        />
      </div>

      <div className="video-info">
        <span className="duration-badge">⏱ {lesson.duration}</span>
        <span className="provider-badge">
          {videoSource.provider === 'mux' ? '🎬 Mux' : '🎥 Vimeo'}
        </span>
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
          margin-bottom: var(--spacing-lg);
        }

        .video-info {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .duration-badge,
        .provider-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: 0.5rem 1rem;
          background: var(--color-neutral-gray);
          color: var(--color-primary-blue);
          border-radius: var(--radius-sm);
          font-family: var(--font-headline-alt);
          font-weight: 600;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .video-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
