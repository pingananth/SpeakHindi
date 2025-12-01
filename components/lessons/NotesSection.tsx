'use client'

import { Lesson } from '@/lib/lessons-config'

interface NotesSectionProps {
    lesson: Lesson
}

export default function NotesSection({ lesson }: NotesSectionProps) {
    return (
        <section className="notes-section">
            <h2 className="section-title">📔 Lesson Notes & Key Takeaways</h2>

            <div className="notes-content">
                <div className="note-block">
                    <h3>Core Vocabulary</h3>
                    <ul>
                        <li><strong>Namaste</strong> (nuh-muh-stay) - Hello, greetings</li>
                        <li><strong>Shukriya</strong> (shook-ree-ya) - Thank you</li>
                        <li><strong>Haan</strong> (hah-n) - Yes</li>
                        <li><strong>Nahi</strong> (nah-hee) - No</li>
                        <li><strong>Kripya</strong> (krip-ya) - Please</li>
                    </ul>
                </div>

                <div className="note-block">
                    <h3>Grammar Tips</h3>
                    <div className="tip-card">
                        <p className="tip-label">💡 Formula Approach</p>
                        <p>In Hindi, the verb typically comes at the end of the sentence:</p>
                        <p className="formula">Subject + Object + Verb</p>
                        <p className="example">Example: "Main paani peeta hoon" = I water drink (I drink water)</p>
                    </div>
                </div>

                <div className="note-block">
                    <h3>Cultural Context</h3>
                    <p>
                        Hindi has different levels of formality. Use "aap" (आप) for formal situations
                        and "tum" (तुम) or "tu" (तू) for informal. When in doubt, start with "aap"
                        to show respect.
                    </p>
                </div>

                <div className="note-block">
                    <h3>Practice Exercises</h3>
                    <ol>
                        <li>Practice saying each vocabulary word 10 times aloud</li>
                        <li>Write down 5 sentences using the grammar formula</li>
                        <li>Record yourself speaking the greetings and listen back</li>
                        <li>Try using these words in a conversation with a Hindi speaker</li>
                    </ol>
                </div>

                <div className="downloadable">
                    <div className="download-card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <h4>Download Worksheet (PDF)</h4>
                            <p>Practice exercises and reference material</p>
                        </div>
                        <button className="download-btn">Download</button>
                    </div>

                    <div className="download-card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                            <h4>Vocabulary Cheat Sheet</h4>
                            <p>Quick reference for all lesson vocabulary</p>
                        </div>
                        <button className="download-btn">Download</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .notes-section {
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

        .notes-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .note-block {
          background: var(--color-neutral-gray);
          padding: var(--spacing-xl);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-teal);
        }

        .note-block h3 {
          font-family: var(--font-headline-alt);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: var(--spacing-md);
        }

        .note-block p {
          color: var(--color-primary-blue);
          line-height: 1.7;
          margin-bottom: var(--spacing-sm);
        }

        .note-block ul,
        .note-block ol {
          color: var(--color-primary-blue);
          line-height: 1.8;
          padding-left: var(--spacing-lg);
        }

        .note-block li {
          margin-bottom: var(--spacing-sm);
        }

        .note-block strong {
          color: var(--color-teal);
          font-weight: 700;
        }

        .tip-card {
          background: rgba(0, 163, 140, 0.05);
          padding: var(--spacing-lg);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(0, 163, 140, 0.2);
        }

        .tip-label {
          font-weight: 700;
          color: var(--color-teal);
          margin-bottom: var(--spacing-sm);
        }

        .formula {
          font-family: var(--font-headline);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          background: var(--color-neutral-white);
          padding: var(--spacing-md);
          border-radius: var(--radius-sm);
          margin: var(--spacing-md) 0;
          text-align: center;
        }

        .example {
          font-style: italic;
          color: var(--color-primary-blue);
          opacity: 0.8;
        }

        .downloadable {
          display: grid;
          gap: var(--spacing-md);
          margin-top: var(--spacing-md);
        }

        .download-card {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          background: var(--color-neutral-white);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          border: 2px solid var(--color-neutral-gray);
          transition: all var(--transition-fast);
        }

        .download-card:hover {
          border-color: var(--color-teal);
          box-shadow: 0 2px 8px rgba(0, 163, 140, 0.1);
        }

        .download-card svg {
          flex-shrink: 0;
          color: var(--color-teal);
          width: 32px;
          height: 32px;
        }

        .download-card > div {
          flex: 1;
        }

        .download-card h4 {
          font-family: var(--font-headline-alt);
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-primary-blue);
          margin-bottom: 0.25rem;
        }

        .download-card p {
          font-size: 0.875rem;
          color: var(--color-primary-blue);
          opacity: 0.7;
          margin: 0;
        }

        .download-btn {
          flex-shrink: 0;
          background: var(--color-teal);
          color: var(--color-neutral-white);
          border: none;
          padding: 0.625rem 1.25rem;
          font-size: 0.9375rem;
          font-weight: 700;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-normal);
          font-family: var(--font-headline-alt);
        }

        .download-btn:hover {
          background: var(--color-primary-blue);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .notes-section {
            padding: var(--spacing-lg);
          }

          .section-title {
            font-size: 1.5rem;
          }

          .note-block {
            padding: var(--spacing-lg);
          }

          .download-card {
            flex-direction: column;
            text-align: center;
          }

          .download-btn {
            width: 100%;
          }
        }
      `}</style>
        </section>
    )
}
