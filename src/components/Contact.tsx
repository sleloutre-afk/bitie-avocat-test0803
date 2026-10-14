export default function Contact() {
  return (
    <section id="contact" style={{ background: '#252b35', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '4rem', alignItems: 'center' }}>

          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '360px', borderRadius: '2px' }}>
            <iframe
              title="Localisation cabinet Bitie — Bordeaux"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.5945%2C44.8218%2C-0.5845%2C44.8318&layer=mapnik&marker=44.8268%2C-0.5895"
              style={{ width: '100%', height: '100%', minHeight: '360px', border: 'none', position: 'absolute', inset: 0, filter: 'hue-rotate(200deg) saturate(0.7) brightness(0.85)' }}
              loading="lazy"
            />
          </div>

          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#5a7a96' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#5a7a96', textTransform: 'uppercase' }}>Contact</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#f3f4f6', margin: '0 0 2.5rem', lineHeight: 1.18 }}>
              Parlons de<br />
              <em style={{ color: '#5a7a96', fontStyle: 'italic' }}>votre situation</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7a96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(243,244,246,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Adresse</div>
                  <div style={{ fontSize: '0.82rem', color: '#f3f4f6', lineHeight: 1.55 }}>
                    37 rue Colonel Grandier-Vazeille<br />33000 Bordeaux
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7a96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(243,244,246,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Téléphone</div>
                  <a href="tel:+33614573726" style={{ fontSize: '0.82rem', color: '#f3f4f6', textDecoration: 'none' }}>+33 6 14 57 37 26</a><br />
                  <a href="tel:+22645379330" style={{ fontSize: '0.82rem', color: 'rgba(243,244,246,0.60)', textDecoration: 'none' }}>+226 45 37 93 30</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7a96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(243,244,246,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Courriel</div>
                  <a href="mailto:akbitie.avocat@gmail.com" style={{ fontSize: '0.82rem', color: '#f3f4f6', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a>
                </div>
              </div>

            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(243,244,246,0.08)' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="tel:+33614573726" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: '#5a7a96', color: '#f3f4f6',
                  padding: '1rem 2.2rem', textDecoration: 'none',
                  fontSize: '0.70rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                  Appeler le cabinet
                </a>
                <a href="mailto:akbitie.avocat@gmail.com" style={{
                  display: 'inline-flex', alignItems: 'center',
                  border: '1px solid rgba(243,244,246,0.25)', color: 'rgba(243,244,246,0.70)',
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
