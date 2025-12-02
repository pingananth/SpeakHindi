'use client'

export default function FeaturesDeepDive() {
    const features = [
        {
            title: 'Video Lessons',
            description: '14 structured modules that break down complex language into simple, predictable patterns.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                </svg>
            )
        },
        {
            title: 'Working Sheets',
            description: 'Downloadable resources that help you immediately practice and synthesize the lesson content.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            title: 'Interactive Quizzes',
            description: 'Test your recall instantly after each module to ensure mastery before moving on.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            )
        },
        {
            title: 'Flashcards',
            description: 'Efficiently drill core vocabulary and common phrases.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            )
        },
        {
            title: 'Future AI Practice Module',
            description: 'Get notified when our judgment-free AI conversation partner launches.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                    <path d="M12 2a10 10 0 0 1 10 10"></path>
                    <path d="M12 12 2.1 12.1"></path>
                </svg>
            )
        }
    ]

    return (
        <section className="deep-dive-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">More Than a Course. It's Your Personal Language Lab.</h2>
                    <p className="section-subtitle">The System's Value</p>
                </div>

                <div className="features-list">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .deep-dive-section {
          padding: var(--spacing-3xl) 0;
          background-color: var(--color-neutral-white);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-family: var(--font-headline);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-sm);
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--color-orange);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          transition: background-color var(--transition-fast);
        }

        .feature-item:hover {
          background-color: var(--color-neutral-gray);
        }

        .feature-icon-wrapper {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background-color: var(--color-blue-light);
          color: var(--color-primary-blue);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-family: var(--font-headline-alt);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-xs);
        }

        .feature-description {
          font-size: 1rem;
          color: var(--color-primary-blue-dark);
          opacity: 0.8;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .features-list {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
        }
      `}</style>
        </section>
    )
}
