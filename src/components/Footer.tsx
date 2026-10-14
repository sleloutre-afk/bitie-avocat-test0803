function MonogramAKB({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16.5" stroke={color} strokeWidth="0.8"/>
      <text x="18" y="21.5" textAnchor="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="8.5" fill={color} letterSpacing="2">
        AKB
      </text>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#141820', borderTop: '1px solid rgba(90,122,150,0.10)', padding: '3rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-footer" style={{ gap: '2.5rem', marginBottom: '3.5rem' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <MonogramAKB color="rgba(243,244,246,0.60)" />
              <div>
                <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.82rem', color: '#f3f4f6' }}>
                  Maître Abdoul Kader Bitie
                </div>
                <div style={{ fontSize: '0.52rem', letterSpacing: '0.18em', color: 'rgba(243,244,246,0.30)', textTransform: 'uppercase', marginTop: '1px' }}>
                  Avocat · Bordeaux & Burkina Faso
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'rgba(243,244,246,0.30)', lineHeight: 1.65 }}>
              Droit des affaires, successions, droit public,<br />construction et droit minier — Bordeaux & Burkina Faso.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.20em', color: '#5a7a96', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Cabinet', href: '#cabinet' },
                { label: "Domaines d'intervention", href: '#domaines' },
                { label: 'Honoraires', href: '#honoraires' },
                { label: 'Ressources', href: '/ressources' },
                { label: 'Contact', href: '#contact' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: '0.72rem', color: 'rgba(243,244,246,0.40)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.20em', color: '#5a7a96', textTransform: 'uppercase', marginBottom: '1rem' }}>Coordonnées</div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(243,244,246,0.40)', lineHeight: 1.80 }}>
              37 rue Colonel Grandier-Vazeille<br />
              33000 Bordeaux<br />
              <a href="tel:+33614573726" style={{ color: 'rgba(243,244,246,0.40)', textDecoration: 'none' }}>+33 6 14 57 37 26</a><br />
              <a href="tel:+22645379330" style={{ color: 'rgba(243,244,246,0.30)', textDecoration: 'none' }}>+226 45 37 93 30</a><br />
              <a href="mailto:akbitie.avocat@gmail.com" style={{ color: 'rgba(243,244,246,0.40)', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(243,244,246,0.05)', paddingTop: '1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
          <div style={{ fontSize: '0.60rem', color: 'rgba(243,244,246,0.20)', letterSpacing: '0.06em' }}>
            &copy; {year} Maître Abdoul Kader Bitie — Avocat inscrit aux Barreaux de Bordeaux et du Burkina Faso
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', flexWrap: 'wrap' }}>
            <a href="/mentions-legales" style={{ fontSize: '0.60rem', color: 'rgba(243,244,246,0.25)', letterSpacing: '0.06em', textDecoration: 'none' }}>
              Mentions légales
            </a>
            <a href="/politique-confidentialite" style={{ fontSize: '0.60rem', color: 'rgba(243,244,246,0.25)', letterSpacing: '0.06em', textDecoration: 'none' }}>
              Politique de confidentialité
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
