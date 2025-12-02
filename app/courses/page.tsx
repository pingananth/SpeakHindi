'use client'

import Link from 'next/link'
import { useLessons } from '@/hooks/useLessons'

export default function CoursesPage() {
  const { lessons, loading, error } = useLessons()
  const freeLessons = lessons.filter(l => l.accessLevel === 'free')

  if (loading) return <p>Loading lessons…</p>
  if (error) return <p>❌ {error}</p>

  return (
    <div className="courses-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Your Hindi Learning Path</h1>
          <p className="page-subtitle">
            A structured journey from zero to conversational fluency.
            Start with {freeLessons.length} free lessons.
          </p>
        </header>

        <div className="lessons-list">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/courses/${lesson.slug}`}
              className="lesson-item"
            >
              <div className="lesson-content">
                <div className="lesson-header">
                  <h2 className="lesson-title">
                    <span className="lesson-number">{lesson.id}.</span> {lesson.title.replace(`Lesson ${lesson.id}: `, '')}
                  </h2>
                  <div className="lesson-badges">
                    {lesson.accessLevel === 'free' && (
                      <span className="badge free">Free</span>
                    )}
                    {lesson.accessLevel === 'login-required' && (
                      <span className="badge login">Login</span>
                    )}
                    {lesson.accessLevel === 'paid' && (
                      <span className="badge premium">Premium</span>
                    )}
                  </div>
                </div>
                <p className="lesson-description">{lesson.description}</p>
              </div>

              <div className="lesson-meta">
                <span className="duration">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {lesson.duration}
                </span>
                <span className="arrow-icon">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .courses-page {
          padding: var(--spacing-3xl) 0;
          min-height: 100vh;
          background-color: var(--color-neutral-white);
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .page-title {
          font-family: var(--font-headline);
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-sm);
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: var(--color-primary-blue);
          opacity: 0.7;
          line-height: 1.5;
        }

        .lessons-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          max-width: 800px;
          margin: 0 auto;
        }

        .lesson-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--color-neutral-white);
          border: 1px solid var(--color-neutral-gray-dark);
          border-radius: var(--radius-md);
          padding: var(--spacing-lg);
          text-decoration: none;
          transition: all var(--transition-fast);
          gap: var(--spacing-lg);
        }

        .lesson-item:hover {
          border-color: var(--color-orange);
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
        }

        .lesson-content {
          flex: 1;
        }

        .lesson-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xs);
          flex-wrap: wrap;
        }

        .lesson-title {
          font-family: var(--font-headline);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin: 0;
        }

        .lesson-number {
          color: var(--color-orange);
          margin-right: 4px;
        }

        .lesson-description {
          color: var(--color-primary-blue-dark);
          opacity: 0.7;
          font-size: 1rem;
          margin: 0;
          line-height: 1.5;
        }

        .lesson-badges {
          display: flex;
          gap: var(--spacing-xs);
        }

        .badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .badge.free {
          background-color: rgba(34, 197, 94, 0.1);
          color: var(--color-success);
        }

        .badge.login {
          background-color: rgba(249, 115, 22, 0.1);
          color: var(--color-orange);
        }

        .badge.premium {
          background-color: var(--color-neutral-gray);
          color: var(--color-primary-blue);
          opacity: 0.7;
        }

        .lesson-meta {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
          flex-shrink: 0;
        }

        .duration {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          color: var(--color-primary-blue);
          opacity: 0.6;
          font-weight: 500;
        }

        .arrow-icon {
          color: var(--color-orange);
          font-weight: 700;
          font-size: 1.25rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all var(--transition-fast);
        }

        .lesson-item:hover .arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 640px) {
          .lesson-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-md);
            padding: var(--spacing-md);
          }

          .lesson-meta {
            width: 100%;
            justify-content: space-between;
            padding-top: var(--spacing-sm);
            border-top: 1px solid var(--color-neutral-gray);
          }

          .arrow-icon {
            opacity: 1;
            transform: none;
            font-size: 1rem;
            width: auto;
          }
        }
      `}</style>
    </div>
  )
}
