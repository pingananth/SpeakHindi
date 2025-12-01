'use client'

import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo-container">
                        <Link href="/" className="logo">
                            <div className="logo-placeholder">
                                <span className="logo-text">SpeakHindi</span>
                            </div>
                        </Link>
                    </div>

                    <nav className="nav">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/courses" className="nav-link">Courses</Link>
                        <Link href="/use-cases" className="nav-link">Use Cases</Link>
                        <Link href="/blog" className="nav-link">Blog</Link>
                    </nav>
                </div>
            </div>

            <style jsx>{`
        .header {
          background: var(--color-neutral-white);
          border-bottom: 1px solid rgba(0, 77, 122, 0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-container {
          flex-shrink: 0;
        }

        .logo {
          text-decoration: none;
          display: block;
        }

        .logo-placeholder {
          background: linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-teal) 100%);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-md);
          transition: transform var(--transition-fast);
        }

        .logo:hover .logo-placeholder {
          transform: scale(1.05);
        }

        .logo-text {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--color-neutral-white);
          letter-spacing: -0.01em;
        }

        .nav {
          display: flex;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .nav-link {
          font-family: var(--font-headline-alt);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-primary-blue);
          text-decoration: none;
          transition: color var(--transition-fast);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-teal);
          transition: width var(--transition-normal);
        }

        .nav-link:hover {
          color: var(--color-teal);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .header {
            padding: 0.75rem 0;
          }

          .logo-placeholder {
            padding: 0.5rem 1rem;
          }

          .logo-text {
            font-size: 1.25rem;
          }

          .nav {
            gap: var(--spacing-sm);
          }

          .nav-link {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          .nav {
            gap: var(--spacing-xs);
          }

          .nav-link {
            font-size: 0.8125rem;
          }
        }
      `}</style>
        </header>
    )
}
