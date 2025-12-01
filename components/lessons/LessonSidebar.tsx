'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LESSONS } from '@/lib/lessons-config'

export default function LessonSidebar() {
    const pathname = usePathname()

    const getAccessBadge = (accessLevel: string) => {
        if (accessLevel === 'free') return { text: 'FREE', color: 'var(--color-teal)' }
        if (accessLevel === 'login-required') return { text: 'Login Required', color: 'var(--color-orange)' }
        return { text: 'Premium', color: 'var(--color-primary-blue)' }
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2 className="sidebar-title">Course Lessons</h2>
                <p className="sidebar-subtitle">{LESSONS.length} Lessons</p>
            </div>

            <nav className="lessons-list">
                {LESSONS.map((lesson) => {
                    const isActive = pathname?.includes(lesson.slug)
                    const badge = getAccessBadge(lesson.accessLevel)

                    return (
                        <Link
                            key={lesson.id}
                            href={`/courses/${lesson.slug}`}
                            className={`lesson-item ${isActive ? 'active' : ''}`}
                        >
                            <div className="lesson-number">
                                <span>{lesson.id}</span>
                            </div>
                            <div className="lesson-info">
                                <h3 className="lesson-title">{lesson.title}</h3>
                                <div className="lesson-meta">
                                    <span className="lesson-duration">{lesson.duration}</span>
                                    <span className="lesson-badge" style={{ color: badge.color }}>
                                        {badge.text}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </nav>

            <style jsx>{`
        .sidebar {
          background: var(--color-neutral-white);
          border-right: 1px solid rgba(0, 77, 122, 0.1);
          height: 100%;
          overflow-y: auto;
          position: sticky;
          top: 0;
        }

        .sidebar-header {
          padding: var(--spacing-xl);
          border-bottom: 2px solid var(--color-neutral-gray);
        }

        .sidebar-title {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-xs);
        }

        .sidebar-subtitle {
          font-size: 0.875rem;
          color: var(--color-primary-blue);
          opacity: 0.6;
        }

        .lessons-list {
          padding: var(--spacing-md);
        }

        .lesson-item {
          display: flex;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-sm);
          text-decoration: none;
          transition: all var(--transition-fast);
          border: 2px solid transparent;
        }

        .lesson-item:hover {
          background: var(--color-neutral-gray);
          border-color: var(--color-teal);
        }

        .lesson-item.active {
          background: linear-gradient(135deg, rgba(0, 77, 122, 0.05) 0%, rgba(0, 163, 140, 0.05) 100%);
          border-color: var(--color-teal);
        }

        .lesson-number {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-teal) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-headline);
          font-weight: 800;
          font-size: 1.125rem;
          color: var(--color-neutral-white);
        }

        .lesson-item.active .lesson-number {
          box-shadow: 0 4px 12px rgba(0, 163, 140, 0.4);
        }

        .lesson-info {
          flex: 1;
          min-width: 0;
        }

        .lesson-title {
          font-family: var(--font-headline-alt);
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-xs);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .lesson-meta {
          display: flex;
          gap: var(--spacing-sm);
          align-items: center;
          font-size: 0.75rem;
        }

        .lesson-duration {
          color: var(--color-primary-blue);
          opacity: 0.6;
        }

        .lesson-badge {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.6875rem;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .sidebar {
            position: relative;
            border-right: none;
            border-bottom: 1px solid rgba(0, 77, 122, 0.1);
          }

          .sidebar-header {
            padding: var(--spacing-md);
          }

          .sidebar-title {
            font-size: 1.25rem;
          }

          .lessons-list {
            padding: var(--spacing-sm);
            max-height: 300px;
            overflow-y: auto;
          }

          .lesson-item {
            padding: var(--spacing-sm);
          }

          .lesson-number {
            width: 32px;
            height: 32px;
            font-size: 0.9375rem;
          }

          .lesson-title {
            font-size: 0.875rem;
          }
        }
      `}</style>
        </aside>
    )
}
