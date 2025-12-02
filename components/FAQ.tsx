'use client'

import { useState } from 'react'

export default function FAQ() {
    const faqs = [
        {
            question: 'What are the pre-requisites to learn this?',
            answer: (
                <>
                    <p>Simple English, Curiosity & Practice.</p>
                    <p>This course is specifically designed as <strong>spoken Hindi for beginners</strong> who know English.</p>
                </>
            )
        },
        {
            question: 'How long will it take?',
            answer: (
                <>
                    <p>You will start to understand when someone speaks within <strong>7 lessons</strong>.</p>
                    <p>Keep practising out loud and you can learn to speak Hindi in <strong>30 days</strong>.</p>
                </>
            )
        },
        {
            question: 'Who is this course for?',
            answer: (
                <ul className="faq-list">
                    <li>Working professionals who have just moved to a Hindi speaking city for a new job</li>
                    <li>Campus placed students who will be moving</li>
                    <li>Travellers</li>
                    <li>Language Enthusiasts</li>
                    <li>Married South Indian women interested in Hindi serials</li>
                    <li>Anyone interested in basic conversational Hindi</li>
                </ul>
            )
        },
        {
            question: 'Who is this not for?',
            answer: (
                <ul className="faq-list">
                    <li>Those who want to read & write Hindi. We focus purely on <strong>spoken Hindi</strong>.</li>
                    <li>Advanced Native Hindi speakers. This is purely aimed at non-native Hindi speakers to fast track their spoken Hindi for survival.</li>
                    <li>School students who want to learn the language for their curriculum.</li>
                </ul>
            )
        },
        {
            question: 'What this course will not help with?',
            answer: (
                <ul className="faq-list">
                    <li>Reading & Writing</li>
                    <li>Covering different Hindi dialects</li>
                    <li>Clearing Hindi exams in school or any other degree</li>
                </ul>
            )
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </div>
                            <div className="faq-answer">
                                <div className="answer-content">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .faq-section {
          padding: var(--spacing-3xl) 0;
          background-color: var(--color-neutral-white);
        }

        .section-title {
          text-align: center;
          font-family: var(--font-headline);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-2xl);
        }

        .faq-grid {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .faq-item {
          border: 1px solid var(--color-neutral-gray-dark);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all var(--transition-normal);
          background: var(--color-neutral-white);
        }

        .faq-item.open {
          border-color: var(--color-orange);
          box-shadow: var(--shadow-md);
        }

        .faq-question {
          padding: var(--spacing-md) var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: var(--color-neutral-white);
        }

        .faq-question h3 {
          font-family: var(--font-headline-alt);
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-primary-blue);
          margin: 0;
        }

        .faq-icon {
          color: var(--color-orange);
          transition: transform var(--transition-normal);
        }

        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-normal);
          background-color: var(--color-neutral-gray);
        }

        .faq-item.open .faq-answer {
          max-height: 500px; /* Arbitrary large height */
        }

        .answer-content {
          padding: var(--spacing-md) var(--spacing-lg);
          color: var(--color-primary-blue-dark);
          line-height: 1.6;
        }

        .faq-list {
          padding-left: 1.5rem;
          margin: 0;
        }

        .faq-list li {
          margin-bottom: 0.5rem;
        }
      `}</style>
        </section>
    )
}
