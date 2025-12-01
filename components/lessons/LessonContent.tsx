'use client'

import { Lesson } from '@/lib/lessons-config'
import VideoWidget from './VideoWidget'
import QuizSection from './QuizSection'
import FlashCards from './FlashCards'
import NotesSection from './NotesSection'
import ResourcesSection from './ResourcesSection'
import FeedbackSection from './FeedbackSection'

interface LessonContentProps {
  lesson: Lesson
}

export default function LessonContent({ lesson }: LessonContentProps) {
  // TODO: Replace with actual auth check
  const isAuthenticated = false
  const hasPaidAccess = false

  // Check access
  const canAccess =
    lesson.accessLevel === 'free' ||
    (lesson.accessLevel === 'login-required' && isAuthenticated) ||
    (lesson.accessLevel === 'paid' && hasPaidAccess)

  if (!canAccess) {
    return (
      <div className="access-denied">
        <div className="container">
          <div className="access-message">
            <h1>🔒 {lesson.accessLevel === 'login-required' ? 'Login Required' : 'Premium Content'}</h1>
            <p>
              {lesson.accessLevel === 'login-required'
                ? 'Please log in to access this lesson for free.'
                : 'Upgrade to premium to unlock all lessons and features.'}
            </p>
            <div className="access-actions">
              {lesson.accessLevel === 'login-required' && (
                <button className="cta-button">Log In to Continue</button>
              )}
              {lesson.accessLevel === 'paid' && (
                <>
                  <button className="cta-button">Upgrade to Premium</button>
                  <button className="secondary-button">Log In</button>
                </>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          .access-denied {
            padding: var(--spacing-3xl);
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .access-message {
            text-align: center;
            max-width: 500px;
          }

          .access-message h1 {
            font-family: var(--font-headline);
            font-size: 2rem;
            color: var(--color-primary-blue);
            margin-bottom: var(--spacing-md);
          }

          .access-message p {
            font-size: 1.125rem;
            color: var(--color-primary-blue);
            opacity: 0.7;
            margin-bottom: var(--spacing-xl);
          }

          .access-actions {
            display: flex;
            gap: var(--spacing-md);
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-button {
            background: var(--color-orange);
            color: var(--color-neutral-white);
            border: none;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 700;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            font-family: var(--font-headline-alt);
          }

          .cta-button:hover {
            background: var(--color-orange-hover);
            transform: translateY(-2px);
          }

          .secondary-button {
            background: transparent;
            color: var(--color-primary-blue);
            border: 2px solid var(--color-primary-blue);
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 700;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            font-family: var(--font-headline-alt);
          }

          .secondary-button:hover {
            background: var(--color-primary-blue);
            color: var(--color-neutral-white);
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="lesson-content">
      <div className="lesson-header">
        <div className="container">
          <div className="header-badge">Lesson {lesson.id}</div>
          <h1 className="lesson-main-title">{lesson.title}</h1>
          <p className="lesson-description">{lesson.description}</p>

          {lesson.goals && lesson.goals.length > 0 && (
            <div className="lesson-goals">
              <h3>Learning Goals</h3>
              <ul>
                {lesson.goals.map((goal, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="lesson-components">
        <div className="container">
          {lesson.components.includes('video') && <VideoWidget lesson={lesson} />}
          {lesson.components.includes('notes') && <NotesSection lesson={lesson} />}
          {lesson.components.includes('quiz') && <QuizSection lesson={lesson} />}
          {lesson.components.includes('flashcards') && <FlashCards lesson={lesson} />}
          {lesson.components.includes('resources') && <ResourcesSection lesson={lesson} />}
          {lesson.components.includes('feedback') && <FeedbackSection lesson={lesson} />}
        </div>
      </div>

      <style jsx>{`
        .lesson-content {
          background: var(--color-neutral-white);
        }

        .lesson-header {
          background: var(--color-neutral-white);
          color: var(--color-primary-blue);
          padding: var(--spacing-3xl) 0 var(--spacing-2xl);
          border-bottom: 2px solid var(--color-neutral-gray);
        }

        .header-badge {
          display: inline-block;
          background: rgba(0, 163, 140, 0.1);
          color: var(--color-teal);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.875rem;
          margin-bottom: var(--spacing-md);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .lesson-main-title {
          font-family: var(--font-headline);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary-blue);
        }

        .lesson-description {
          font-size: 1.25rem;
          opacity: 0.8;
          margin-bottom: var(--spacing-xl);
          color: var(--color-primary-blue);
        }

        .lesson-goals {
          background: var(--color-neutral-gray);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          border: 2px solid rgba(0, 163, 140, 0.2);
        }

        .lesson-goals h3 {
          font-family: var(--font-headline-alt);
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary-blue);
        }

        .lesson-goals ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .lesson-goals li {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          font-size: 1rem;
          color: var(--color-primary-blue);
        }

        .lesson-goals li svg {
          flex-shrink: 0;
          color: var(--color-teal);
          margin-top: 2px;
        }

        .lesson-components {
          padding: var(--spacing-3xl) 0;
        }

        @media (max-width: 768px) {
          .lesson-header {
            padding: var(--spacing-2xl) 0 var(--spacing-lg);
          }

          .lesson-components {
            padding: var(--spacing-2xl) 0;
          }
        }
      `}</style>
    </div>
  )
}
