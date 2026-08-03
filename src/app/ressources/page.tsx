import { getAllArticles } from '@/lib/articles'

const domainLabels: Record<string, string> = {
  etranger: 'Droit des étrangers',
  travail: 'Droit du travail',
  commercial: 'Droit commercial',
  assurance: 'Droit des assurances',
  fiscal: 'Droit fiscal',
}

export const metadata = {
  title: 'Ressources juridiques — Maître Abdoul Kader Bitie, Avocat Bordeaux',
  description: "Articles pratiques en droit des étrangers, droit du travail, droit commercial et droit fiscal rédigés par Maître Abdoul Kader Bitie, avocat au Barreau de Bordeaux.",
}

export default function RessourcesPage() {
  const articles = getAllArticles()

  return (
    <main style={{ background: '#f1ede5', minHeight: '100vh', paddingTop: '120px', paddingBottom: '7rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ marginBottom: '4.5rem' }}>
          <div className="flex items-center gap-3" style={{ marginBottom: '1.2rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#c08a40' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#c08a40', textTransform: 'uppercase' }}>Ressources juridiques</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#2e2b28', margin: '0 0 1rem', lineHeight: 1.18 }}>
            Comprendre vos droits
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#686460', lineHeight: 1.70, maxWidth: '540px', margin: 0 }}>
            Des articles pratiques rédigés par Maître Bitie pour vous aider à mieux appréhender les situations courantes en droit des étrangers, du travail, commercial et fiscal.
          </p>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem' }}>
          {articles.map(article => (
            <a key={article.slug} href={`/ressources/${article.slug}`} className="ressource-card"
              style={{ display: 'block', textDecoration: 'none', border: '1px solid rgba(46,43,40,0.08)', background: '#fff', transition: 'border-color 0.2s ease' }}>
              <div style={{ padding: '2rem 1.8rem 1.8rem' }}>
                <div style={{ display: 'inline-block', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c08a40', border: '1px solid rgba(192,138,64,0.35)', padding: '0.25rem 0.65rem', marginBottom: '1.2rem' }}>
                  {domainLabels[article.domain] ?? article.domain}
                </div>
                <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 400, color: '#2e2b28', margin: '0 0 0.9rem', lineHeight: 1.40 }}>
                  {article.title}
                </h2>
                <p style={{ fontSize: '0.77rem', color: '#686460', lineHeight: 1.65, margin: '0 0 1.8rem' }}>{article.excerpt}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} style={{ fontSize: '0.55rem', color: '#686460', letterSpacing: '0.06em', background: 'rgba(46,43,40,0.05)', padding: '0.2rem 0.55rem' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c08a40' }}>Lire l&apos;article</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  )
}
