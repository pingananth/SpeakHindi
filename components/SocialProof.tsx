'use client'

export default function SocialProof() {
  const companies = [
    { name: 'TCS', opacity: 0.7 },
    { name: 'HCL', opacity: 0.6 },
    { name: 'John Deere', opacity: 0.8 },
    { name: 'L&T', opacity: 0.7 },
    { name: 'Siemens', opacity: 0.6 },
    { name: 'GE', opacity: 0.7 },
  ]

  return (
    <section className="social-proof-section">
      <div className="container">
        <p className="social-proof-label">Used by professionals at</p>
        <div className="logos-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-logo" style={{ opacity: company.opacity }}>
              <span className="logo-text">{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .social-proof-section {
          background-color: var(--color-neutral-gray);
          padding: var(--spacing-lg) 0;
          border-bottom: 1px solid var(--color-neutral-gray-dark);
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-md);
        }

        .social-proof-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-primary-blue);
          opacity: 0.6;
          font-weight: 600;
        }

        .logos-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .company-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all var(--transition-normal);
          cursor: default;
          min-width: 100px;
        }

        .logo-text {
          font-family: var(--font-headline);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-primary-blue-dark);
          opacity: 0.7;
          letter-spacing: -0.01em;
        }

        .company-logo:hover {
          opacity: 1 !important;
          transform: translateY(-2px);
          background: var(--color-neutral-white);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-orange);
        }

        .company-logo:hover .logo-text {
          color: var(--color-orange);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .logos-grid {
            gap: var(--spacing-md);
          }
          
          .company-logo {
            min-width: 80px;
            padding: 0.4rem 0.8rem;
          }

          .logo-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
