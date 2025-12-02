import { ReactNode } from 'react'
import CoursesLayoutWrapper from '@/components/lessons/CoursesLayoutWrapper'

export const metadata = {
  title: 'All Lessons - Hindi in English Course',
  description: 'Browse all lessons in our structured, self-paced spoken Hindi course. Start learning Hindi in English today.',
}

import Header from '@/components/Header'

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
