'use client'

import { trackEvent } from './Analytics'

export default function Hero() {
  const handleCTAClick = () => {
    trackEvent('click', 'CTA', 'Hero - Start Free Lesson')
  }

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Speak Hindi Fluent in 30 Days: <span className="highlight">The Formula Way</span>
          </h1>

          <p className="hero-subtitle">
            The only structured system that eliminates the Hindi script barrier to unlock practical fluency.
            Perfect for professionals, students, and travelers who need fast, real-world results.
          </p>

          <button
            className="cta-button primary-cta"
            onClick={handleCTAClick}
            aria-label="Start your first free Hindi lesson"
          >
            START FREE LESSON
            <svg className="arrow-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <p className="hero-subtext">
            <svg className="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            First 3 lessons FREE • No credit card required
          </p>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-primary-blue-dark) 100%);
          color: var(--color-neutral-white);
          position: relative;
          overflow: hidden;
          padding: var(--spacing-3xl) 0;
          width: 100%;
          max-width: 100vw;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: min(800px, 150vw);
          height: min(800px, 150vw);
          background: radial-gradient(circle, rgba(0, 163, 140, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: min(600px, 120vw);
          height: min(600px, 120vw);
          background: radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-family: var(--font-headline);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: var(--spacing-lg);
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(90deg, var(--color-teal) 0%, var(--color-teal-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.375rem);
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
          opacity: 0.95;
          font-weight: 400;
        }

        .cta-button {
          background: var(--color-orange);
          color: var(--color-neutral-white);
          border: none;
          padding: 1.125rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: 0 10px 30px rgba(255, 140, 0, 0.4);
          font-family: var(--font-headline-alt);
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
          text-transform: uppercase;
        }

        .cta-button:hover {
          background: var(--color-orange-hover);
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 140, 0, 0.5);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .arrow-icon {
          transition: transform var(--transition-normal);
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(4px);
        }

        .hero-subtext {
          margin-top: var(--spacing-lg);
          font-size: 0.9375rem;
          opacity: 0.9;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-xs);
        }

        .check-icon {
          color: var(--color-teal-light);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: var(--spacing-2xl) 0;
          }

          .hero-title {
            font-size: 2.25rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
            padding: 1rem 2rem;
          }
        }
      `}</style>
    </section>
  )
}
