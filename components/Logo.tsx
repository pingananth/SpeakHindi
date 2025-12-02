'use client'



import React from 'react'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  // dark variant = colored logo for light backgrounds (default)
  // light variant = white/light logo for dark backgrounds

  const textColor = variant === 'dark' ? 'var(--color-primary-blue)' : 'var(--color-neutral-white)'
  const iconColor = 'var(--color-orange)'

  return (
    <div className={`logo-container ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Speech Bubble Shape */}
        <path
          d="M36 18C36 26.8366 28.8366 34 20 34C17.5 34 15.1 33.4 13 32.3L6 35L8.5 28.5C5.7 25.8 4 22.1 4 18C4 9.16344 11.1634 2 20 2C28.8366 2 36 9.16344 36 18Z"
          stroke={iconColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Spark/Lightning Bolt inside */}
        <path
          d="M22 10L15 18H20L18 26L25 18H20L22 10Z"
          fill={iconColor}
          stroke={iconColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="logo-text">
        <span className="logo-speak" style={{ color: textColor }}>Speak</span>
        <span className="logo-hindi" style={{ color: iconColor }}>Hindi</span>
      </div>

      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-headline);
          text-decoration: none;
        }

        .logo-icon {
          flex-shrink: 0;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          font-weight: 800;
          font-size: 1.25rem;
        }

        .logo-speak {
          letter-spacing: -0.02em;
        }

        .logo-hindi {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }
      `}</style>
    </div>
  )
}
