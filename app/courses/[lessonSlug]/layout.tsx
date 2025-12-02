'use client'

import { ReactNode } from 'react'
import CoursesLayoutWrapper from '@/components/lessons/CoursesLayoutWrapper'

export default function LessonLayout({ children }: { children: ReactNode }) {
    return <CoursesLayoutWrapper>{children}</CoursesLayoutWrapper>
}
