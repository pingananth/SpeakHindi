'use client'

export default function WhyUs() {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="var(--color-teal)" opacity="0.15" />
          <path d="M24 14V34M14 24H34" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 18L30 30M30 18L18 30" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      title: 'No Hindi Script',
      description: 'Start to speak Hindi language from day one without learning complex Devanagari script'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="var(--color-teal)" opacity="0.15" />
          <path d="M16 24L22 30L32 18" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Learn Via English',
      description: 'Learn Hindi through English using familiar phonetics and relatable examples'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="var(--color-teal)" opacity="0.15" />
          <path d="M24 12V24L30 30" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="10" stroke="var(--color-teal)" strokeWidth="3" />
        </svg>
      ),
      title: 'Simple Grammar Formula',
      description: 'Easy way to learn Hindi grammar and basic Hindi grammar for beginners with our unique formula'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="var(--color-teal)" opacity="0.15" />
          <rect x="14" y="18" width="20" height="16" rx="2" stroke="var(--color-teal)" strokeWidth="3" />
          <path d="M18 14V18M30 14V18M14 24H34" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Interactive Practice',
      description: 'Quizzes, flashcards, and worksheets to reinforce your learning'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="var(--color-teal)" opacity="0.15" />
          <circle cx="24" cy="24" r="8" fill="var(--color-teal)" />
          <path d="M24 12V16M24 32V36M12 24H16M32 24H36" stroke="var(--color-teal)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Self-Paced Videos',
      description: 'Discover how to learn Hindi fast and quick with our structured video lessons'
    }
  ]

  return (
    <section className="whyus-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose SpeakHindi?</h2>
          <p className="section-subtitle">
            The fastest, most practical way to master Hindi conversation
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .whyus-section {
          background-color: var(--color-neutral-white);
          padding: var(--spacing-3xl) 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-family: var(--font-headline);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-md);
          letter-spacing: -0.01em;
        }

        .section-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.25rem);
          color: var(--color-primary-blue);
          opacity: 0.8;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-2xl);
        }

        .feature-card {
          background: var(--color-neutral-white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-xl);
          text-align: center;
          transition: all var(--transition-normal);
          border: 2px solid transparent;
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-teal);
        }

        .feature-icon {
          margin-bottom: var(--spacing-md);
          display: flex;
          justify-content: center;
          transition: transform var(--transition-normal);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-family: var(--font-headline-alt);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-sm);
        }

        .feature-description {
          font-size: 1rem;
          color: var(--color-primary-blue);
          opacity: 0.75;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .whyus-section {
            padding: var(--spacing-2xl) 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .feature-card {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </section>
  )
}
