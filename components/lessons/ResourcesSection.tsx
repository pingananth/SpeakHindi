'use client'

import { Lesson } from '@/lib/lessons-config'

interface ResourcesSectionProps {
    lesson: Lesson
}

export default function ResourcesSection({ lesson }: ResourcesSectionProps) {
    const resources = [
        {
            title: 'Hindi Pronunciation Guide',
            description: 'Audio guide for mastering Hindi sounds using English phonetics',
            type: 'Audio',
            icon: '🎧',
            url: '#'
        },
        {
            title: 'Common Phrases Cheat Sheet',
            description: 'Quick reference for everyday Hindi conversations',
            type: 'PDF',
            icon: '📄',
            url: '#'
        },
        {
            title: 'Grammar Formula Examples',
            description: '50+ examples demonstrating the Hindi grammar formula approach',
            type: 'Document',
            icon: '📋',
            url: '#'
        },
        {
            title: 'Practice Conversation Scripts',
            description: 'Role-play scenarios for real-world practice',
            type: 'PDF',
            icon: '💬',
            url: '#'
        }
    ]

    return (
        <section className="resources-section">
            <h2 className="section-title">📚 Additional Resources</h2>
            <p className="section-description">
                Supplement your learning with these curated materials to practice and reinforce your skills.
            </p>

            <div className="resources-grid">
                {resources.map((resource, index) => (
                    <a
                        key={index}
                        href={resource.url}
                        className="resource-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="resource-icon">{resource.icon}</div>
                        <div className="resource-content">
                            <div className="resource-header">
                                <h3 className="resource-title">{resource.title}</h3>
                                <span className="resource-type">{resource.type}</span>
                            </div>
                            <p className="resource-description">{resource.description}</p>
                            <div className="resource-action">
                                <span>Access Resource</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 3.33334L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <style jsx>{`
        .resources-section {
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

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-lg);
        }

        .resource-card {
          display: flex;
          gap: var(--spacing-md);
          background: var(--color-neutral-gray);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          border: 2px solid transparent;
          text-decoration: none;
          transition: all var(--transition-normal);
        }

        .resource-card:hover {
          border-color: var(--color-teal);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 163, 140, 0.15);
        }

        .resource-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
          line-height: 1;
        }

        .resource-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .resource-title {
          font-family: var(--font-headline-alt);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          line-height: 1.3;
        }

        .resource-type {
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-teal);
          background: rgba(0, 163, 140, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .resource-description {
          font-size: 0.9375rem;
          color: var(--color-primary-blue);
          opacity: 0.7;
          line-height: 1.5;
          margin-bottom: var(--spacing-md);
          flex-grow: 1;
        }

        .resource-action {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-teal);
        }

        .resource-action svg {
          transition: transform var(--transition-fast);
        }

        .resource-card:hover .resource-action svg {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .resources-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .resource-icon {
            font-size: 2rem;
          }

          .resource-title {
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    )
}
