'use client'

export default function FounderStory() {
    return (
        <section className="founder-story-section">
            <div className="container">
                <div className="story-card">
                    <div className="story-content">
                        <h2 className="story-title">Built by a South Indian Professional Who Solved the Pain.</h2>
                        <div className="story-text">
                            <p>
                                "After failing to use traditional Hindi classes and nearly quitting a job due to the language barrier, Founder Anantha Subramaniam reverse-engineered the Hindi language into the Speak Hindi Fast Formula—a 30-day confidence system designed for efficiency, not academic excellence."
                            </p>
                        </div>
                        <div className="founder-signature">
                            - Anantha Subramaniam
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .founder-story-section {
          padding: var(--spacing-3xl) 0;
          background-color: var(--color-neutral-gray);
        }

        .story-card {
          background-color: var(--color-neutral-white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-2xl);
          box-shadow: var(--shadow-lg);
          max-width: 900px;
          margin: 0 auto;
          border-left: 6px solid var(--color-orange);
        }

        .story-title {
          font-family: var(--font-headline);
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-lg);
          line-height: 1.3;
        }

        .story-text {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--color-primary-blue-dark);
          font-style: italic;
          margin-bottom: var(--spacing-lg);
        }

        .founder-signature {
          font-family: var(--font-headline-alt);
          font-weight: 700;
          color: var(--color-orange);
          font-size: 1.125rem;
          text-align: right;
        }

        @media (max-width: 768px) {
          .story-card {
            padding: var(--spacing-xl);
          }
        }
      `}</style>
        </section>
    )
}
