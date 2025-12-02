// lib/lesson-loader.ts
// Simple client‑side loader for the static lesson index.
// The JSON file lives in `public/data/lessons.json` and is served
// automatically by Next.js as a static asset.

import type { Lesson } from '@/lib/lessons-config';

/**
 * Fetch the lesson index from the public folder.
 * Throws if the request fails so callers can handle the error.
 */
export async function loadLessonIndex(): Promise<Lesson[]> {
    const res = await fetch('/data/lessons.json');
    if (!res.ok) {
        throw new Error(`Failed to load lessons (status ${res.status})`);
    }
    const data = (await res.json()) as Lesson[];
    return data;
}

/**
 * Helper to fetch a markdown file for a given lesson slug.
 * Returns the raw markdown string.
 */
export async function loadLessonMarkdown(slug: string): Promise<string> {
    const res = await fetch(`/content/lessons/${slug}.md`);
    if (!res.ok) {
        throw new Error(`Failed to load markdown for ${slug}`);
    }
    return await res.text();
}
