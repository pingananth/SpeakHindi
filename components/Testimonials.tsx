'use client'

import { useState } from 'react'

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Software Engineer',
            location: 'Bangalore',
            image: '👩‍💼',
            quote: 'I was skeptical at first, but SpeakHindi\'s method really works! Within 3 weeks, I went from zero Hindi to having basic conversations with my colleagues. The no-script approach was a game-changer.',
            rating: 5
        },
        {
            name: 'Rajesh Kumar',
            role: 'Marketing Manager',
            location: 'Mumbai',
            image: '👨‍💼',
            quote: 'The grammar formula simplified everything. I tried traditional methods for years but got frustrated with the scripts. This approach finally made Hindi accessible to me. Highly recommended!',
            rating: 5
        },
        {
            name: 'Anita Desai',
            role: 'Entrepreneur',
            location: 'Delhi',
            image: '👩‍💻',
            quote: 'As a business owner, I needed to communicate with my Hindi-speaking clients. SpeakHindi\'s self-paced videos fit perfectly into my schedule. The flashcards and quizzes helped me retain everything.',
            rating: 5
        }
    ]

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Success Stories</h2>
                    <p className="section-subtitle">
                        Join thousands who are already speaking Hindi confidently
                    </p>
                </div>

                <div className="testimonials-wrapper">
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="quote-icon">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 25C10 20.5817 13.5817 17 18 17V14C12.4772 14 8 18.4772 8 24V28C8 29.1046 8.89543 30 10 30H14C15.1046 30 16 29.1046 16 28V25C16 23.8954 15.1046 23 14 23H10ZM24 25C24 20.5817 27.5817 17 32 17V14C26.4772 14 22 18.4772 22 24V28C22 29.1046 22.8954 30 24 30H28C29.1046 30 30 29.1046 30 28V25C30 23.8954 29.1046 23 28 23H24Z" fill="var(--color-orange)" opacity="0.3" />
                                    </svg>
                                </div>

                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="var(--color-orange)" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 1L12.9389 6.90983L19.5106 7.90983L14.7553 12.5902L15.8779 19.0902L10 15.9098L4.12215 19.0902L5.24472 12.5902L0.489435 7.90983L7.06107 6.90983L10 1Z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="testimonial-quote">"{testimonial.quote}"</p>

                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.image}</div>
                                    <div className="author-info">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                        <p className="author-role">{testimonial.role}</p>
                                        <p className="author-location">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`View testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .testimonials-section {
          background-color: var(--color-neutral-gray);
          padding: var(--spacing-3xl) 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
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
        }

        .testimonials-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .testimonial-card {
          background: var(--color-neutral-white);
          border-radius: var(--radius-xl);
          padding: var(--spacing-xl);
          position: relative;
          transition: all var(--transition-normal);
          cursor: pointer;
          border: 2px solid transparent;
          box-shadow: var(--shadow-md);
        }

        .testimonial-card:hover,
        .testimonial-card.active {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-teal);
        }

        .quote-icon {
          margin-bottom: var(--spacing-md);
        }

        .rating {
          display: flex;
          gap: 4px;
          margin-bottom: var(--spacing-md);
        }

        .testimonial-quote {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-lg);
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding-top: var(--spacing-md);
          border-top: 2px solid var(--color-neutral-gray);
        }

        .author-avatar {
          font-size: 3rem;
          line-height: 1;
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          font-family: var(--font-headline-alt);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: 4px;
        }

        .author-role,
        .author-location {
          font-size: 0.9375rem;
          color: var(--color-primary-blue);
          opacity: 0.7;
          margin: 0;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-xl);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--color-primary-blue);
          opacity: 0.3;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0;
        }

        .dot:hover {
          opacity: 0.5;
        }

        .dot.active {
          opacity: 1;
          background-color: var(--color-teal);
          width: 32px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: var(--spacing-2xl) 0;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }

          .testimonial-card {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
        </section>
    )
}
