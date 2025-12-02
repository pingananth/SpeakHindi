import { useState } from 'react'
import { ReactNode } from 'react'
import LessonSidebar from '@/components/lessons/LessonSidebar'

interface CoursesLayoutWrapperProps {
  children: ReactNode
}

export default function CoursesLayoutWrapper({ children }: CoursesLayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className={`courses-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <LessonSidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className="lesson-content-wrapper">
        {children}
      </main>

      <style jsx>{`
        .courses-layout {
          display: grid;
          grid-template-columns: ${isSidebarOpen ? '300px' : '0px'} 1fr;
          min-height: calc(100vh - 80px); /* Adjust for header height */
          background-color: var(--color-neutral-gray);
          transition: grid-template-columns var(--transition-normal);
          position: relative;
        }

        .lesson-content-wrapper {
          background-color: var(--color-neutral-white);
          overflow-y: auto;
          height: calc(100vh - 80px);
          position: relative;
        }

        @media (max-width: 968px) {
          .courses-layout {
            grid-template-columns: ${isSidebarOpen ? '280px' : '0px'} 1fr;
          }
        }

        @media (max-width: 768px) {
          .courses-layout {
            grid-template-columns: 1fr;
            position: relative;
          }
          
          .courses-layout.sidebar-open .lesson-content-wrapper {
             display: none; /* Hide content when sidebar is full screen on mobile */
          }
        }
      `}</style>
    </div>
  )
}
