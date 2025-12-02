// hooks/useLessons.ts
import { useEffect, useState } from 'react';
import type { Lesson } from '@/lib/lessons-config';
import { loadLessonIndex } from '@/lib/lesson-loader';

/**
 * Hook that loads the lesson index from the static JSON file.
 * Returns the list, a loading flag and any error message.
 */
export function useLessons() {
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadLessonIndex()
            .then(setLessons)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { lessons, loading, error };
}
