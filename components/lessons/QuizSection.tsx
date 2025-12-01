'use client'

import { useState } from 'react'
import { Lesson } from '@/lib/lessons-config'

interface QuizSectionProps {
    lesson: Lesson
}

interface QuizQuestion {
    id: number
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
}

// Sample quiz data - TODO: Replace with data from Contentful
const SAMPLE_QUIZ: QuizQuestion[] = [
    {
        id: 1,
        question: 'How do you say "Hello" in Hindi?',
        options: ['Shukriya', 'Namaste', 'Alvida', 'Kripya'],
        correctAnswer: 1,
        explanation: 'Namaste is a common greeting in Hindi, used throughout the day.'
    },
    {
        id: 2,
        question: 'What is the correct way to say "Thank you" in Hindi?',
        options: ['Namaste', 'Kripya', 'Shukriya', 'Haan'],
        correctAnswer: 2,
        explanation: 'Shukriya means "Thank you" in Hindi.'
    }
]

export default function QuizSection({ lesson }: QuizSectionProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [showExplanation, setShowExplanation] = useState(false)
    const [score, setScore] = useState(0)
    const [quizCompleted, setQuizCompleted] = useState(false)

    const quiz = SAMPLE_QUIZ
    const question = quiz[currentQuestion]

    const handleAnswerSelect = (optionIndex: number) => {
        if (showExplanation) return

        setSelectedAnswer(optionIndex)
        setShowExplanation(true)

        if (optionIndex === question.correctAnswer) {
            setScore(score + 1)
        }
    }

    const handleNext = () => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setShowExplanation(false)
        } else {
            setQuizCompleted(true)
        }
    }

    const handleRestart = () => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setShowExplanation(false)
        setScore(0)
        setQuizCompleted(false)
    }

    if (quizCompleted) {
        const percentage = Math.round((score / quiz.length) * 100)

        return (
            <section className="quiz-section">
                <h2 className="section-title">✅ Quiz Completed!</h2>

                <div className="quiz-results">
                    <div className="score-display">
                        <div className="score-circle">
                            <span className="score-percentage">{percentage}%</span>
                        </div>
                        <p className="score-text">You scored {score} out of {quiz.length}</p>
                    </div>

                    <div className="result-message">
                        {percentage >= 80 && (
                            <p className="success">🎉 Excellent work! You've mastered this lesson.</p>
                        )}
                        {percentage >= 60 && percentage < 80 && (
                            <p className="good">👍 Good job! Review the video for areas to improve.</p>
                        )}
                        {percentage < 60 && (
                            <p className="retry">📚 Keep practicing! Rewatch the video and try again.</p>
                        )}
                    </div>

                    <button onClick={handleRestart} className="restart-button">
                        Take Quiz Again
                    </button>
                </div>

                <style jsx>{`
          .quiz-section {
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
            margin-bottom: var(--spacing-xl);
          }

          .quiz-results {
            text-align: center;
          }

          .score-display {
            margin-bottom: var(--spacing-xl);
          }

          .score-circle {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-teal) 0%, var(--color-primary-blue) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto var(--spacing-md);
            box-shadow: 0 8px 24px rgba(0, 163, 140, 0.3);
          }

          .score-percentage {
            font-family: var(--font-headline);
            font-size: 3rem;
            font-weight: 900;
            color: var(--color-neutral-white);
          }

          .score-text {
            font-size: 1.25rem;
            color: var(--color-primary-blue);
            font-weight: 600;
          }

          .result-message {
            margin-bottom: var(--spacing-xl);
          }

          .result-message p {
            font-size: 1.125rem;
            padding: var(--spacing-lg);
            border-radius: var(--radius-md);
          }

          .success {
            background: rgba(0, 163, 140, 0.1);
            color: var(--color-teal);
          }

          .good {
            background: rgba(255, 140, 0, 0.1);
            color: var(--color-orange);
          }

          .retry {
            background: rgba(0, 77, 122, 0.1);
            color: var(--color-primary-blue);
          }

          .restart-button {
            background: var(--color-primary-blue);
            color: var(--color-neutral-white);
            border: none;
            padding: 1rem 2rem;
            font-size: 1rem;
            font-weight: 700;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-normal);
            font-family: var(--font-headline-alt);
          }

          .restart-button:hover {
            background: var(--color-teal);
            transform: translateY(-2px);
          }
        `}</style>
            </section>
        )
    }

    return (
        <section className="quiz-section">
            <h2 className="section-title">📝 Knowledge Check</h2>

            <div className="quiz-progress">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestion + 1) / quiz.length) * 100}%` }}
                    />
                </div>
                <p className="progress-text">Question {currentQuestion + 1} of {quiz.length}</p>
            </div>

            <div className="question-card">
                <h3 className="question-text">{question.question}</h3>

                <div className="options-list">
                    {question.options.map((option, index) => {
                        const isSelected = selectedAnswer === index
                        const isCorrect = index === question.correctAnswer
                        const showResult = showExplanation

                        let optionClass = 'option'
                        if (showResult && isSelected && isCorrect) optionClass += ' correct'
                        if (showResult && isSelected && !isCorrect) optionClass += ' incorrect'
                        if (showResult && !isSelected && isCorrect) optionClass += ' correct-answer'

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={optionClass}
                                disabled={showExplanation}
                            >
                                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                                <span className="option-text">{option}</span>
                                {showResult && isCorrect && <span className="checkmark">✓</span>}
                                {showResult && isSelected && !isCorrect && <span className="xmark">✗</span>}
                            </button>
                        )
                    })}
                </div>

                {showExplanation && (
                    <div className="explanation">
                        <p className="explanation-label">Explanation:</p>
                        <p className="explanation-text">{question.explanation}</p>
                        <button onClick={handleNext} className="next-button">
                            {currentQuestion < quiz.length - 1 ? 'Next Question' : 'View Results'} →
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
        .quiz-section {
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
          margin-bottom: var(--spacing-xl);
        }

        .quiz-progress {
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

        .progress-text {
          font-size: 0.875rem;
          color: var(--color-primary-blue);
          opacity: 0.6;
          font-weight: 600;
        }

        .question-card {
          background: var(--color-neutral-gray);
          padding: var(--spacing-xl);
          border-radius: var(--radius-md);
        }

        .question-text {
          font-family: var(--font-headline-alt);
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-xl);
          line-height: 1.4;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: var(--color-neutral-white);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-size: 1rem;
        }

        .option:hover:not(:disabled) {
          border-color: var(--color-teal);
          transform: translateX(4px);
        }

        .option:disabled {
          cursor: not-allowed;
        }

        .option.correct,
        .option.correct-answer {
          background: rgba(0, 163, 140, 0.1);
          border-color: var(--color-teal);
        }

        .option.incorrect {
          background: rgba(220, 38, 38, 0.1);
          border-color: #dc2626;
        }

        .option-letter {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-primary-blue);
          color: var(--color-neutral-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
        }

        .option.correct .option-letter,
        .option.correct-answer .option-letter {
          background: var(--color-teal);
        }

        .option.incorrect .option-letter {
          background: #dc2626;
        }

        .option-text {
          flex: 1;
          color: var(--color-primary-blue);
          font-weight: 500;
        }

        .checkmark,
        .xmark {
          flex-shrink: 0;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .checkmark {
          color: var(--color-teal);
        }

        .xmark {
          color: #dc2626;
        }

        .explanation {
          padding: var(--spacing-lg);
          background: rgba(0, 163, 140, 0.05);
          border-left: 4px solid var(--color-teal);
          border-radius: var(--radius-sm);
        }

        .explanation-label {
          font-weight: 700;
          color: var(--color-teal);
          margin-bottom: var(--spacing-sm);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .explanation-text {
          color: var(--color-primary-blue);
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
        }

        .next-button {
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

        .next-button:hover {
          background: var(--color-orange-hover);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .quiz-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }

          .question-card {
            padding: var(--spacing-lg);
          }

          .question-text {
            font-size: 1.125rem;
          }

          .option {
            padding: var(--spacing-md);
          }
        }
      `}</style>
        </section>
    )
}
