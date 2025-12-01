'use client'

import Link from 'next/link'
import { LESSONS, getFreeLessons } from '@/lib/lessons-config'

export default function CoursesPage() {
  const freeLessons = getFreeLessons()

  return (
    <div className="courses-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Welcome to Your Hindi Learning Journey</h1>
          <p className="page-subtitle">
            Master Hindi in 30 days with our structured, formula-based approach.
            Start with {freeLessons.length} free lessons—no credit card required!
          </p>
        </header>

        <div className="lessons-grid">
          {LESSONS.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/courses/${lesson.slug}`}
              className="lesson-card"
            >
              <div className="lesson-card-header">
                <span className="lesson-badge-number">Lesson {lesson.id}</span>
                {lesson.accessLevel === 'free' && (
                  <span className="access-badge free">FREE</span>
                )}
                {lesson.accessLevel === 'login-required' && (
                  <span className="access-badge login">Login Required</span>
                )}
                {lesson.accessLevel === 'paid' && (
                  <span className="access-badge premium">Premium</span>
                )}
              </div>

              <h2 className="lesson-card-title">{lesson.title}</h2>
              <p className="lesson-card-description">{lesson.description}</p>

              <div className="lesson-card-footer">
                <span className="lesson-duration">⏱ {lesson.duration}</span>
                <span className="lesson-components">
                  {lesson.components.length} components
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .courses-page {
          padding: var(--spacing-3xl) 0;
          min-height: 100vh;
        }

        .page-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .page-title {
          font-family: var(--font-headline);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-md);
        }

        .page-subtitle {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--color-primary-blue);
          opacity: 0.8;
          line-height: 1.6;
        }

        .lessons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--spacing-xl);
        }

        .lesson-card {
          background: var(--color-neutral-white);
          border: 2px solid var(--color-neutral-gray);
          border-radius: var(--radius-lg);
          padding: var(--spacing-xl);
          text-decoration: none;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .lesson-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-teal);
        }

        .lesson-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
        }

        .lesson-badge-number {
          font-family: var(--font-headline-alt);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .access-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .access-badge.free {
          background: rgba(0, 163, 140, 0.1);
          color: var(--color-teal);
        }

        .access-badge.login {
          background: rgba(255, 140, 0, 0.1);
          color: var(--color-orange);
        }

        .access-badge.premium {
          background: rgba(0, 77, 122, 0.1);
          color: var(--color-primary-blue);
        }

        .lesson-card-title {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-sm);
        }

        .lesson-card-description {
          color: var(--color-primary-blue);
          opacity: 0.7;
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
          flex-grow: 1;
        }

        .lesson-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-neutral-gray);
          font-size: 0.875rem;
          color: var(--color-primary-blue);
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .courses-page {
            padding: var(--spacing-2xl) 0;
          }

          .lessons-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .lesson-card {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  )
}
