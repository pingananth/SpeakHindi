import { notFound } from 'next/navigation'
import { getLessonBySlug, LESSONS } from '@/lib/lessons-config'
import LessonContent from '@/components/lessons/LessonContent'

export async function generateStaticParams() {
    return LESSONS.map((lesson) => ({
        lessonSlug: lesson.slug,
    }))
}

export async function generateMetadata({ params }: { params: { lessonSlug: string } }) {
    const lesson = getLessonBySlug(params.lessonSlug)

    if (!lesson) {
        return {
            title: 'Lesson Not Found',
        }
    }

    return {
        title: `${lesson.title} - Hindi in English Course`,
        description: lesson.description,
    }
}

export default function LessonPage({ params }: { params: { lessonSlug: string } }) {
    const lesson = getLessonBySlug(params.lessonSlug)

    if (!lesson) {
        notFound()
    }

    return <LessonContent lesson={lesson} />
}
