import { getContentfulClient } from './contentful-client'
import { LessonEntry, LessonFields } from '@/types/contentful'

export class ContentfulService {
    private static client = getContentfulClient()

    /**
     * Fetch all lessons ordered by lesson number
     */
    static async getAllLessons(): Promise<LessonEntry[]> {
        try {
            const response = await this.client.getEntries<LessonFields>({
                content_type: 'lesson',
                order: 'fields.lessonNumber',
                include: 2, // Include linked entries (video, notes, etc.)
            })
            return response.items
        } catch (error) {
            console.error('Error fetching lessons:', error)
            return []
        }
    }

    /**
     * Fetch a single lesson by slug
     */
    static async getLessonBySlug(slug: string): Promise<LessonEntry | null> {
        try {
            const response = await this.client.getEntries<LessonFields>({
                content_type: 'lesson',
                'fields.slug': slug,
                limit: 1,
                include: 2,
            })
            return response.items[0] || null
        } catch (error) {
            console.error(`Error fetching lesson with slug ${slug}:`, error)
            return null
        }
    }

    /**
     * Fetch a single lesson by ID
     */
    static async getLessonById(id: number): Promise<LessonEntry | null> {
        try {
            const response = await this.client.getEntries<LessonFields>({
                content_type: 'lesson',
                'fields.lessonNumber': id,
                limit: 1,
                include: 2,
            })
            return response.items[0] || null
        } catch (error) {
            console.error(`Error fetching lesson with ID ${id}:`, error)
            return null
        }
    }

    /**
     * Fetch only free lessons
     */
    static async getFreeLessons(): Promise<LessonEntry[]> {
        try {
            const response = await this.client.getEntries<LessonFields>({
                content_type: 'lesson',
                'fields.accessLevel': 'free',
                order: 'fields.lessonNumber',
                include: 2,
            })
            return response.items
        } catch (error) {
            console.error('Error fetching free lessons:', error)
            return []
        }
    }

    /**
     * Get all lesson slugs for static generation
     */
    static async getAllLessonSlugs(): Promise<string[]> {
        try {
            const response = await this.client.getEntries<LessonFields>({
                content_type: 'lesson',
                select: 'fields.slug',
            })
            return response.items.map((item) => item.fields.slug)
        } catch (error) {
            console.error('Error fetching lesson slugs:', error)
            return []
        }
    }
}
