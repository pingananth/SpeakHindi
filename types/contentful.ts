import { Entry, Asset } from 'contentful'
import { VideoSource } from './video'

// Contentful Lesson Entry
export interface LessonFields {
    title: string
    slug: string
    lessonNumber: number
    description: string
    duration: string
    accessLevel: 'free' | 'login-required' | 'paid'
    learningGoals?: string[]
    thumbnail?: Asset
    videoContent?: Entry<VideoFields>
    notesContent?: Entry<NotesFields>
    quizContent?: Entry<QuizFields>
    flashcardSet?: Entry<FlashcardSetFields>
    resources?: Entry<ResourceFields>[]
    order?: number
}

export type LessonEntry = Entry<LessonFields>

// Video Content
export interface VideoFields {
    title: string
    videoProvider: 'mux' | 'vimeo'
    videoId: string
    playbackId?: string // For Mux
    thumbnail?: Asset
    transcript?: string
    duration?: string
}

export type VideoEntry = Entry<VideoFields>

// Lesson Notes
export interface NotesFields {
    title: string
    content: any // Rich text from Contentful
    keyPoints?: string[]
    examplePhrases?: {
        phrases: Array<{
            english: string
            hindi: string
            phonetic: string
        }>
    }
}

export type NotesEntry = Entry<NotesFields>

// Quiz
export interface QuizFields {
    title: string
    description?: string
    questions: Entry<QuizQuestionFields>[]
    passingScore?: number
}

export type QuizEntry = Entry<QuizFields>

// Quiz Question
export interface QuizQuestionFields {
    questionText: string
    questionType: 'multiple-choice' | 'true-false' | 'fill-blank'
    options: {
        options: Array<{
            id: string
            text: string
        }>
    }
    correctAnswer: string
    explanation?: string
    difficulty?: 'easy' | 'medium' | 'hard'
}

export type QuizQuestionEntry = Entry<QuizQuestionFields>

// Flashcard Set
export interface FlashcardSetFields {
    title: string
    cards: Entry<FlashcardFields>[]
}

export type FlashcardSetEntry = Entry<FlashcardSetFields>

// Flashcard
export interface FlashcardFields {
    front: string
    back: string
    phonetic?: string
    category?: string
    audioUrl?: string
}

export type FlashcardEntry = Entry<FlashcardFields>

// Resource
export interface ResourceFields {
    title: string
    description?: string
    file: Asset
    resourceType: 'pdf' | 'worksheet' | 'cheatsheet' | 'audio'
    fileSize?: string
}

export type ResourceEntry = Entry<ResourceFields>

// Helper function to convert Contentful video to VideoSource
export function videoEntryToSource(videoEntry: VideoEntry): VideoSource {
    const fields = videoEntry.fields
    return {
        provider: fields.videoProvider,
        videoId: fields.videoId,
        playbackId: fields.playbackId,
        thumbnail: fields.thumbnail?.fields.file.url,
    }
}
