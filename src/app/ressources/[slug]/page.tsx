import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'

const domainLabels: Record<string, string> = {
  etranger: 'Droit des étrangers',
  travail: 'Droit du travail',
  commercial: 'Droit commercial',
  assurance: 'Droit des assurances',
  fiscal: 'Droit fiscal',
}

export function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Maître Abdoul Kader Bitie, Avocat Bordeaux`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <main style={{ background: '#f1ede5', minHeight: '100vh', paddingTop: '120px', paddingBottom: '7rem' }}>
      <div className="max-w-3xl mx-auto px-6">

        <div style={{ marginBottom: '3rem' }}>
          <a href="/ressources" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c08a40', textDecoration: 'none', marginBottom: '2.5rem' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Retour aux ressources
          </a>

          <div style={{ display: 'inline-block', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c08a40', border: '1px solid rgba(192,138,64,0.35)', padding: '0.25rem 0.65rem', marginBottom: '1.5rem' }}>
            {domainLabels[article.domain] ?? article.domain}
          </div>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: '#2e2b28', margin: '0 0 1.2rem', lineHeight: 1.18 }}>
            {article.title}
          </h1>

          <p style={{ fontSize: '0.88rem', color: '#686460', lineHeight: 1.75, margin: '0 0 2rem', borderLeft: '3px solid #c08a40', paddingLeft: '1.2rem' }}>
            {article.excerpt}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {article.tags.map(tag => (
              <span key={tag} style={{ fontSize: '0.55rem', color: '#686460', letterSpacing: '0.06em', background: 'rgba(46,43,40,0.06)', padding: '0.2rem 0.6rem' }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(46,43,40,0.10)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
          {article.content.map((para, i) => (
            <p key={i} style={{ fontSize: '0.88rem', color: '#3a3530', lineHeight: 1.85, margin: '0 0 1.4rem' }}>{para}</p>
          ))}
        </div>

        <div style={{ background: '#2e2b28', padding: '2.5rem', borderLeft: '4px solid #c08a40' }}>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: '#c08a40', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Besoin d&apos;un conseil personnalisé ?
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(241,237,229,0.70)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
            Chaque situation est unique. Maître Bitie vous accompagne pour analyser votre dossier et défendre vos droits avec rigueur.
          </p>
          <a href="tel:+33627839153" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#c08a40', color: '#f1ede5', padding: '0.85rem 1.8rem', textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Prendre rendez-vous
          </a>
        </div>

      </div>
    </main>
  )
}
