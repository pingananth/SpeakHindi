'use client'

import { useState } from 'react'
import { Lesson } from '@/lib/lessons-config'

interface FeedbackSectionProps {
    lesson: Lesson
}

export default function FeedbackSection({ lesson }: FeedbackSectionProps) {
    const [rating, setRating] = useState<number>(0)
    const [feedback, setFeedback] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Send feedback to backend/analytics
        console.log('Feedback submitted:', { lessonId: lesson.id, rating, feedback })
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <section className="feedback-section">
                <div className="success-message">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="#00A38C" fillOpacity="0.1" />
                        <path d="M20 32L28 40L44 24" stroke="#00A38C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3>Thank you for your feedback!</h3>
                    <p>Your input helps us improve the course for everyone.</p>
                </div>

                <style jsx>{`
          .feedback-section {
            background: var(--color-neutral-white);
            border-radius: var(--radius-lg);
            padding: var(--spacing-2xl);
            margin-bottom: var(--spacing-2xl);
            border: 2px solid var(--color-neutral-gray);
          }

          .success-message {
            text-align: center;
            padding: var(--spacing-3xl) var(--spacing-xl);
          }

          .success-message svg {
            margin-bottom: var(--spacing-lg);
          }

          .success-message h3 {
            font-family: var(--font-headline);
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--color-teal);
            margin-bottom: var(--spacing-sm);
          }

          .success-message p {
            font-size: 1rem;
            color: var(--color-primary-blue);
            opacity: 0.7;
          }
        `}</style>
            </section>
        )
    }

    return (
        <section className="feedback-section">
            <h2 className="section-title">💭 Share Your Feedback</h2>
            <p className="section-description">
                Help us improve! Let us know how this lesson worked for you.
            </p>

            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="rating-container">
                    <label className="rating-label">How would you rate this lesson?</label>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className={`star ${rating >= star ? 'filled' : ''}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div className="textarea-container">
                    <label className="textarea-label" htmlFor="feedback">
                        What did you think? (Optional)
                    </label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Share your thoughts, suggestions, or questions..."
                        rows={5}
                        className="feedback-textarea"
                    />
                </div>

                <button
                    type="submit"
                    className="submit-button"
                    disabled={rating === 0}
                >
                    Submit Feedback
                </button>
            </form>

            <style jsx>{`
        .feedback-section {
          background: var(--color-neutral-white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
          border: 2px solid var(--color-neutral-gray);
        }

        .section-title {
          font-family: var(--font-headline);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-sm);
        }

        .section-description {
          color: var(--color-primary-blue);
          opacity: 0.7;
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .rating-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .rating-label {
          font-family: var(--font-headline-alt);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-blue);
        }

        .stars {
          display: flex;
          gap: var(--spacing-sm);
        }

        .star {
          font-size: 3rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-neutral-gray);
          transition: all var(--transition-fast);
          padding: 0;
          line-height: 1;
        }

        .star:hover {
          transform: scale(1.2);
        }

        .star.filled {
          color: var(--color-orange);
        }

        .textarea-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .textarea-label {
          font-family: var(--font-headline-alt);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-blue);
        }

        .feedback-textarea {
          padding: var(--spacing-md);
          border: 2px solid var(--color-neutral-gray);
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-primary-blue);
          resize: vertical;
          transition: border-color var(--transition-fast);
        }

        .feedback-textarea:focus {
          outline: none;
          border-color: var(--color-teal);
        }

        .feedback-textarea::placeholder {
          color: var(--color-primary-blue);
          opacity: 0.4;
        }

        .submit-button {
          background: var(--color-orange);
          color: var(--color-neutral-white);
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-normal);
          font-family: var(--font-headline-alt);
          align-self: flex-start;
        }

        .submit-button:hover:not(:disabled) {
          background: var(--color-orange-hover);
          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .feedback-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }

          .star {
            font-size: 2.5rem;
          }

          .submit-button {
            width: 100%;
          }
        }
      `}</style>
        </section>
    )
}
