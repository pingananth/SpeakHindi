'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo-link">
          <Logo />
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/courses" className="nav-link">Courses</Link>
          <Link href="/use-cases" className="nav-link">Use Cases</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          background: var(--color-neutral-white);
          border-bottom: 1px solid transparent;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all var(--transition-normal);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border-bottom-color: rgba(0, 77, 122, 0.1);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-link {
          text-decoration: none;
          transition: transform var(--transition-fast);
        }

        .logo-link:hover {
          transform: scale(1.02);
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
          background: var(--color-orange);
          transition: width var(--transition-normal);
        }

        .nav-link:hover {
          color: var(--color-orange);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-primary-blue);
          position: relative;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: inherit;
          left: 0;
          transition: all var(--transition-fast);
        }

        .hamburger::before { top: -8px; }
        .hamburger::after { bottom: -8px; }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .nav {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: var(--color-neutral-white);
            flex-direction: column;
            padding: var(--spacing-lg);
            gap: var(--spacing-md);
            border-bottom: 1px solid var(--color-neutral-gray-dark);
            transform: translateY(-150%);
            transition: transform var(--transition-normal);
            z-index: 99;
          }

          .nav.mobile-open {
            transform: translateY(0);
            box-shadow: var(--shadow-lg);
          }
        }
      `}</style>
    </header>
  )
}
