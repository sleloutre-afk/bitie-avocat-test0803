import { getAllArticles } from '@/lib/articles'

const domainLabels: Record<string, string> = {
  etranger: 'Droit des étrangers',
  travail: 'Droit du travail',
  commercial: 'Droit commercial',
  assurance: 'Droit des assurances',
  fiscal: 'Droit fiscal',
}

export default function Ressources() {
  const articles = getAllArticles().slice(0, 6)

  return (
    <section id="ressources" style={{ background: '#fff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#c08a40' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#c08a40', textTransform: 'uppercase' }}>
              Ressources juridiques
            </span>
            <div style={{ width: '24px', height: '1px', background: '#c08a40' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 400, color: '#2e2b28', margin: '0 0 0.8rem', lineHeight: 1.20 }}>
            Comprendre vos droits
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#686460', maxWidth: '480px', margin: '0 auto', lineHeight: 1.70 }}>
            Des articles pratiques pour mieux appréhender les situations courantes en droit des étrangers, du travail, commercial et fiscal.
          </p>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {articles.map(article => (
            <a key={article.slug} href={`/ressources/${article.slug}`} className="ressource-card"
              style={{ display: 'block', textDecoration: 'none', border: '1px solid rgba(46,43,40,0.08)', background: '#f1ede5', transition: 'border-color 0.2s ease' }}>
              <div style={{ padding: '2rem 1.8rem 1.6rem' }}>
                <div style={{
                  display: 'inline-block', fontSize: '0.55rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#c08a40',
                  border: '1px solid rgba(192,138,64,0.35)', padding: '0.25rem 0.65rem', marginBottom: '1.2rem',
                }}>
                  {domainLabels[article.domain] ?? article.domain}
                </div>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.95rem', fontWeight: 400, color: '#2e2b28', margin: '0 0 0.9rem', lineHeight: 1.40 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: '0.77rem', color: '#686460', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
                  {article.excerpt}
                </p>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c08a40' }}>
                  Lire l&apos;article
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/ressources" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: '#2e2b28', color: '#f1ede5',
            padding: '1rem 2.4rem', textDecoration: 'none',
            fontSize: '0.70rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Voir toutes les ressources
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
