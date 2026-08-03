import { MonogramAKB } from './Navbar'

export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden', background: '#111010' }}>

      <div className="hero-img" style={{ position: 'absolute', inset: '-10%', width: '120%', height: '120%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.png" alt="Cabinet Bitie — Avocat à Bordeaux" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(17,16,16,0.96) 0%, rgba(17,16,16,0.78) 55%, rgba(17,16,16,0.48) 100%)',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '580px', paddingTop: '72px' }}>

          <div className="flex items-center gap-3" style={{ marginBottom: '2.5rem' }}>
            <div style={{ width: '32px', height: '1px', background: '#c08a40' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.30em', color: 'rgba(241,237,229,0.60)', textTransform: 'uppercase' }}>
              Avocat — Étrangers · Travail · Commercial — Barreau de Bordeaux
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', margin: '0 0 1.5rem' }}>
            <MonogramAKB color="rgba(241,237,229,0.75)" size={108} />
            <h1 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 400, color: '#f1ede5',
              lineHeight: 1.12, margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Maître<br />
              Abdoul Kader<br />
              <em style={{ color: '#c08a40', fontStyle: 'italic' }}>Bitie</em>
            </h1>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'rgba(241,237,229,0.55)', lineHeight: 1.70, margin: '0 0 0.75rem' }}>
            Droit des étrangers · Droit du travail · Droit commercial<br />
            Droit des assurances · Droit fiscal
          </p>
          <p style={{ fontSize: '0.72rem', color: 'rgba(241,237,229,0.30)', letterSpacing: '0.06em', margin: '0 0 3rem' }}>
            Cabinet situé au cœur de Bordeaux — 37 rue Colonel Grandier-Vazeille
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="tel:+33627839153" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
              background: '#c08a40', color: '#f1ede5',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Appeler le cabinet
            </a>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(241,237,229,0.25)', color: 'rgba(241,237,229,0.70)',
              textDecoration: 'none', fontSize: '0.70rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '1rem 2.2rem',
            }}>
              Prendre contact
            </a>
          </div>

        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(192,138,64,0.60), transparent)' }} />
      </div>

    </section>
  )
}
