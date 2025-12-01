'use client'

import { ReactNode } from 'react'
import LessonSidebar from '@/components/lessons/LessonSidebar'

interface CoursesLayoutWrapperProps {
    children: ReactNode
}

export default function CoursesLayoutWrapper({ children }: CoursesLayoutWrapperProps) {
    return (
        <div className="courses-layout">
            <LessonSidebar />
            <main className="lesson-content-wrapper">
                {children}
            </main>

            <style jsx>{`
        .courses-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          min-height: calc(100vh - 60px);
          background-color: var(--color-neutral-gray);
        }

        .lesson-content-wrapper {
          background-color: var(--color-neutral-white);
          overflow-y: auto;
        }

        @media (max-width: 968px) {
          .courses-layout {
            grid-template-columns: 280px 1fr;
          }
        }

        @media (max-width: 768px) {
          .courses-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    )
}
