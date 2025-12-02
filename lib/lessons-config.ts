export type AccessLevel = 'free' | 'login-required' | 'paid'

export type LessonComponent =
    | 'video'
    | 'quiz'
    | 'flashcards'
    | 'notes'
    | 'resources'
    | 'feedback'

export interface Lesson {
    id: number
    slug: string
    title: string
    description: string
    accessLevel: AccessLevel
    components: LessonComponent[]
    // Video properties
    videoUrl?: string // Legacy: for iframe embeds
    videoProvider?: 'mux' | 'vimeo' // New: video provider type
    videoId?: string // New: provider-specific video ID
    playbackId?: string // New: Mux playback ID
    duration?: string
    goals?: string[]
}

export const LESSONS: Lesson[] = [
    {
        id: 1,
        slug: 'lesson-1-hindi-basics',
        title: 'Lesson 1: Hindi Basics',
        description: 'Learn the fundamentals of Hindi pronunciation and basic greetings without scripts',
        accessLevel: 'free',
        components: ['video', 'notes', 'quiz', 'flashcards'],
        duration: '15 min',
        goals: [
            'Understand basic Hindi sounds using English phonetics',
            'Master common greetings and introductions',
            'Learn the concept of formal vs informal speech'
        ]
    },
    {
        id: 2,
        slug: 'lesson-2-numbers-time',
        title: 'Lesson 2: Numbers & Time',
        description: 'Master numbers, counting, and telling time in Hindi',
        accessLevel: 'free',
        components: ['video', 'notes', 'quiz', 'flashcards', 'resources'],
        duration: '18 min',
        goals: [
            'Count from 1 to 100 in Hindi',
            'Tell time and discuss daily schedules',
            'Use numbers in practical contexts'
        ]
    },
    {
        id: 3,
        slug: 'lesson-3-daily-conversations',
        title: 'Lesson 3: Daily Conversations',
        description: 'Essential phrases for everyday interactions',
        accessLevel: 'login-required',
        components: ['video', 'notes', 'quiz', 'flashcards', 'feedback'],
        duration: '20 min',
        goals: [
            'Ask and answer common questions',
            'Express likes, dislikes, and preferences',
            'Navigate basic social situations'
        ]
    },
    {
        id: 4,
        slug: 'lesson-4-family-relationships',
        title: 'Lesson 4: Family & Relationships',
        description: 'Talk about family members and personal relationships',
        accessLevel: 'paid',
        components: ['video', 'notes', 'quiz', 'flashcards', 'resources'],
        duration: '22 min',
        goals: [
            'Describe family members and relationships',
            'Use possessive pronouns correctly',
            'Discuss personal and professional relationships'
        ]
    },
    {
        id: 5,
        slug: 'lesson-5-grammar-formula',
        title: 'Lesson 5: The Grammar Formula',
        description: 'Our unique formula approach to Hindi grammar',
        accessLevel: 'paid',
        components: ['video', 'notes', 'quiz', 'flashcards', 'resources', 'feedback'],
        duration: '25 min',
        goals: [
            'Understand the core grammar formula',
            'Form simple and complex sentences',
            'Apply the formula to various contexts'
        ]
    },
    {
        id: 6,
        slug: 'lesson-6-workplace-hindi',
        title: 'Lesson 6: Workplace Hindi',
        description: 'Professional Hindi for office environments',
        accessLevel: 'paid',
        components: ['video', 'notes', 'quiz', 'flashcards', 'resources'],
        duration: '20 min',
        goals: [
            'Use professional greetings and formalities',
            'Discuss work tasks and projects',
            'Navigate office conversations confidently'
        ]
    },
    // TEST LESSON - Vimeo Integration
    {
        id: 99,
        slug: 'test-vimeo-lesson',
        title: 'Test Lesson: Vimeo Integration',
        description: 'A test lesson to verify Vimeo video player integration',
        accessLevel: 'free',
        components: ['video', 'notes'],
        videoProvider: 'vimeo',
        videoId: '1142315086', // Replace with your Vimeo video ID
        duration: '10 min',
        goals: [
            'Test Vimeo player functionality',
            'Verify speed controls work',
            'Check mobile responsiveness'
        ]
    }
]

export function getLessonBySlug(slug: string): Lesson | undefined {
    return LESSONS.find(lesson => lesson.slug === slug)
}

export function getLessonById(id: number): Lesson | undefined {
    return LESSONS.find(lesson => lesson.id === id)
}

export function getFreeLessons(): Lesson[] {
    return LESSONS.filter(lesson => lesson.accessLevel === 'free')
}

export function isPremiumLesson(lesson: Lesson): boolean {
    return lesson.accessLevel === 'paid'
}

export function requiresLogin(lesson: Lesson): boolean {
    return lesson.accessLevel === 'login-required' || lesson.accessLevel === 'paid'
}
