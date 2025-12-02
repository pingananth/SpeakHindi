'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LESSONS } from '@/lib/lessons-config'

interface LessonSidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function LessonSidebar({ isOpen, onToggle }: LessonSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="sidebar-wrapper">
      {/* Toggle Button (Visible when closed or on mobile) */}
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
        onClick={onToggle}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      <aside className={`sidebar ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Course Content</h2>
          <button className="close-btn-mobile" onClick={onToggle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav className="lessons-list">
          {LESSONS.map((lesson) => {
            const isActive = pathname?.includes(lesson.slug)

            return (
              <Link
                key={lesson.id}
                href={`/courses/${lesson.slug}`}
                className={`lesson-item ${isActive ? 'active' : ''}`}
              >
                <span className="lesson-number">{lesson.id}</span>
                <span className="lesson-title">{lesson.title.replace(`Lesson ${lesson.id}: `, '')}</span>
                {lesson.accessLevel === 'free' && <span className="status-dot free" />}
                {lesson.accessLevel === 'login-required' && <span className="status-dot lock" />}
              </Link>
            )
          })}
        </nav>
      </aside>

      <style jsx>{`
            .sidebar-wrapper {
                height: 100%;
                position: relative;
                z-index: 40;
            }

            .sidebar {
                background: var(--color-neutral-white);
                border-right: 1px solid var(--color-neutral-gray-dark);
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                width: 100%;
                transition: transform var(--transition-normal);
            }

            .sidebar.hidden {
                transform: translateX(-100%);
                width: 0;
                overflow: hidden;
                border: none;
            }

            .sidebar-toggle {
                position: fixed;
                left: ${isOpen ? '260px' : '20px'};
                top: 100px; /* Below header */
                z-index: 50;
                background: var(--color-neutral-white);
                border: 2px solid var(--color-orange);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: var(--shadow-md);
                color: var(--color-orange);
                transition: all var(--transition-normal);
            }
            
            .sidebar-toggle:hover {
                background: var(--color-orange);
                color: var(--color-neutral-white);
                transform: scale(1.1);
            }

            .sidebar-header {
                padding: var(--spacing-lg);
                border-bottom: 1px solid var(--color-neutral-gray-dark);
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: sticky;
                top: 0;
                background: var(--color-neutral-white);
                z-index: 10;
            }

            .sidebar-title {
                font-family: var(--font-headline);
                font-size: 1.125rem;
                font-weight: 700;
                color: var(--color-primary-blue);
                margin: 0;
            }

            .close-btn-mobile {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                color: var(--color-primary-blue);
            }

            .lessons-list {
                padding: var(--spacing-md) 0;
                display: flex;
                flex-direction: column;
                gap: var(--spacing-xs); /* Space between lessons */
            }

            .lesson-item {
                display: flex;
                align-items: flex-start; /* Align to top for multi-line */
                padding: var(--spacing-md) var(--spacing-lg);
                text-decoration: none;
                color: var(--color-primary-blue);
                font-size: 0.9375rem;
                border-left: 3px solid transparent;
                transition: all var(--transition-fast);
                /* Removed white-space: nowrap and overflow hidden */
            }

            .lesson-item:hover {
                background-color: var(--color-neutral-gray);
                color: var(--color-orange);
            }

            .lesson-item.active {
                background-color: rgba(249, 115, 22, 0.05);
                border-left-color: var(--color-orange);
                color: var(--color-orange);
                font-weight: 600;
            }

            .lesson-number {
                font-family: var(--font-headline);
                font-weight: 700;
                margin-right: var(--spacing-md);
                opacity: 0.5;
                min-width: 24px;
                flex-shrink: 0;
                margin-top: 2px; /* Align with first line of title */
            }

            .lesson-item.active .lesson-number {
                opacity: 1;
            }

            .lesson-title {
                flex: 1;
                /* Allow wrapping */
                line-height: 1.4;
            }

            .status-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin-left: var(--spacing-sm);
                flex-shrink: 0;
            }

            .status-dot.free {
                background-color: var(--color-success);
            }

            .status-dot.lock {
                background-color: var(--color-neutral-gray-dark);
            }

            @media (max-width: 768px) {
                .sidebar-toggle {
                    left: 20px;
                    bottom: 20px;
                    top: auto; /* Floating FAB on mobile */
                    background: var(--color-orange);
                    color: white;
                    border: none;
                    width: 50px;
                    height: 50px;
                    box-shadow: var(--shadow-lg);
                }

                .sidebar {
                    position: fixed;
                    top: 80px; /* Below header */
                    left: 0;
                    width: 100%;
                    height: calc(100vh - 80px);
                    z-index: 40;
                }
                
                .sidebar.hidden {
                    transform: translateX(-100%);
                }

                .close-btn-mobile {
                    display: block;
                }
            }
        `}</style>
    </div>
  )
}
