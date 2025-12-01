'use client'

import { useState } from 'react'
import { Lesson } from '@/lib/lessons-config'

interface FlashCardsProps {
    lesson: Lesson
}

interface FlashCard {
    id: number
    front: string
    back: string
    category?: string
}

// Sample flashcards - TODO: Replace with data from Contentful
const SAMPLE_CARDS: FlashCard[] = [
    { id: 1, front: 'Namaste', back: 'Hello / Greetings', category: 'Greetings' },
    { id: 2, front: 'Shukriya', back: 'Thank you', category: 'Courtesy' },
    { id: 3, front: 'Haan', back: 'Yes', category: 'Basic' },
    { id: 4, front: 'Nahi', back: 'No', category: 'Basic' },
    { id: 5, front: 'Kripya', back: 'Please', category: 'Courtesy' },
    { id: 6, front: 'Maaf kijiye', back: 'Excuse me / Sorry', category: 'Courtesy' }
]

export default function FlashCards({ lesson }: FlashCardsProps) {
    const [currentCard, setCurrentCard] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)
    const [knownCards, setKnownCards] = useState<number[]>([])

    const cards = SAMPLE_CARDS
    const card = cards[currentCard]
    const progress = ((currentCard + 1) / cards.length) * 100

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleNext = () => {
        if (currentCard < cards.length - 1) {
            setCurrentCard(currentCard + 1)
            setIsFlipped(false)
        }
    }

    const handlePrevious = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1)
            setIsFlipped(false)
        }
    }

    const handleMarkKnown = () => {
        if (!knownCards.includes(card.id)) {
            setKnownCards([...knownCards, card.id])
        }
        handleNext()
    }

    const handleReset = () => {
        setCurrentCard(0)
        setIsFlipped(false)
        setKnownCards([])
    }

    return (
        <section className="flashcards-section">
            <h2 className="section-title">🃏 Flashcards</h2>
            <p className="section-description">
                Practice vocabulary and phrases. Click the card to flip it and reveal the meaning.
            </p>

            <div className="flashcard-progress">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="progress-info">
                    <span>Card {currentCard + 1} of {cards.length}</span>
                    <span>{knownCards.length} learned</span>
                </div>
            </div>

            <div className="flashcard-container">
                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                    <div className="flashcard-inner">
                        <div className="flashcard-front">
                            {card.category && <span className="card-category">{card.category}</span>}
                            <p className="card-text">{card.front}</p>
                            <span className="flip-hint">Click to flip</span>
                        </div>
                        <div className="flashcard-back">
                            <p className="card-text">{card.back}</p>
                            <span className="flip-hint">Click to see Hindi</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flashcard-controls">
                <button
                    onClick={handlePrevious}
                    disabled={currentCard === 0}
                    className="control-btn"
                >
                    ← Previous
                </button>

                <button
                    onClick={handleMarkKnown}
                    className="know-btn"
                    disabled={currentCard === cards.length - 1}
                >
                    ✓ I Know This
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentCard === cards.length - 1}
                    className="control-btn"
                >
                    Next →
                </button>
            </div>

            {currentCard === cards.length - 1 && (
                <div className="completion-message">
                    <p>🎉 You've reviewed all flashcards!</p>
                    <button onClick={handleReset} className="reset-btn">
                        Start Over
                    </button>
                </div>
            )}

            <style jsx>{`
        .flashcards-section {
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

        .flashcard-progress {
          margin-bottom: var(--spacing-xl);
        }

        .progress-bar {
          height: 8px;
          background: var(--color-neutral-gray);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: var(--spacing-sm);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-teal) 0%, var(--color-primary-blue) 100%);
          transition: width var(--transition-normal);
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: var(--color-primary-blue);
          opacity: 0.6;
          font-weight: 600;
        }

        .flashcard-container {
          perspective: 1000px;
          margin-bottom: var(--spacing-xl);
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flashcard {
          width: 100%;
          max-width: 500px;
          height: 300px;
          cursor: pointer;
          position: relative;
        }

        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flashcard.flipped .flashcard-inner {
          transform: rotateY(180deg);
        }

        .flashcard-front,
        .flashcard-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-2xl);
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .flashcard-front {
          background: linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-teal) 100%);
          color: var(--color-neutral-white);
        }

        .flashcard-back {
          background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-teal) 100%);
          color: var(--color-neutral-white);
          transform: rotateY(180deg);
        }

        .card-category {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        .card-text {
          font-family: var(--font-headline);
          font-size: 2.5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: var(--spacing-md);
        }

        .flip-hint {
          font-size: 0.875rem;
          opacity: 0.8;
          font-style: italic;
        }

        .flashcard-controls {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        .control-btn,
        .know-btn {
          padding: 0.875rem 1.75rem;
          border: none;
          border-radius: var(--radius-md);
          font-family: var(--font-headline-alt);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .control-btn {
          background: var(--color-neutral-gray);
          color: var(--color-primary-blue);
        }

        .control-btn:hover:not(:disabled) {
          background: var(--color-primary-blue);
          color: var(--color-neutral-white);
          transform: translateY(-2px);
        }

        .control-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .know-btn {
          background: var(--color-teal);
          color: var(--color-neutral-white);
        }

        .know-btn:hover:not(:disabled) {
          background: var(--color-primary-blue);
          transform: translateY(-2px);
        }

        .completion-message {
          text-align: center;
          padding: var(--spacing-xl);
          background: rgba(0, 163, 140, 0.1);
          border-radius: var(--radius-md);
          margin-top: var(--spacing-xl);
        }

        .completion-message p {
          font-size: 1.25rem;
          color: var(--color-teal);
          font-weight: 700;
          margin-bottom: var(--spacing-md);
        }

        .reset-btn {
          background: var(--color-orange);
          color: var(--color-neutral-white);
          border: none;
          padding: 0.875rem 1.75rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-normal);
          font-family: var(--font-headline-alt);
        }

        .reset-btn:hover {
          background: var(--color-orange-hover);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .flashcards-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }

          .flashcard {
            height: 250px;
          }

          .card-text {
            font-size: 2rem;
          }

          .flashcard-controls {
            flex-direction: column;
          }

          .control-btn,
          .know-btn {
            width: 100%;
          }
        }
      `}</style>
        </section>
    )
}
