import { MonogramAKB } from './Navbar'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#2e2b28', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '4rem', alignItems: 'center' }}>

          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '360px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/office.png" alt="Cabinet de Maître Abdoul Kader Bitie — Bordeaux"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: 0.80 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(46,43,40,0.45)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MonogramAKB size={130} color="rgba(241,237,229,0.18)" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#c08a40' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#c08a40', textTransform: 'uppercase' }}>Contact</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#f1ede5', margin: '0 0 2.5rem', lineHeight: 1.18 }}>
              Parlons de<br />
              <em style={{ color: '#c08a40', fontStyle: 'italic' }}>votre situation</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c08a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(241,237,229,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Adresse</div>
                  <div style={{ fontSize: '0.82rem', color: '#f1ede5', lineHeight: 1.55 }}>
                    37 rue Colonel Grandier-Vazeille<br />33000 Bordeaux
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c08a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(241,237,229,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Téléphone</div>
                  <a href="tel:+33627839153" style={{ fontSize: '0.82rem', color: '#f1ede5', textDecoration: 'none' }}>06 27 83 91 53</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c08a40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(241,237,229,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Courriel</div>
                  <a href="mailto:akbitie.avocat@gmail.com" style={{ fontSize: '0.82rem', color: '#f1ede5', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a>
                </div>
              </div>

            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(241,237,229,0.08)' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+33627839153" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: '#c08a40', color: '#f1ede5',
                  padding: '1rem 2.2rem', textDecoration: 'none',
                  fontSize: '0.70rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  Appeler le cabinet
                </a>
                <a href="mailto:akbitie.avocat@gmail.com" style={{
                  display: 'inline-flex', alignItems: 'center',
                  border: '1px solid rgba(241,237,229,0.25)', color: 'rgba(241,237,229,0.70)',
                  padding: '1rem 2.2rem', textDecoration: 'none',
                  fontSize: '0.70rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  Écrire un email
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
