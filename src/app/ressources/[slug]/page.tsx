import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'

const domainLabels: Record<string, string> = {
  affaires: 'Droit des affaires et fiscalité',
  successions: 'Droit des successions',
  public: 'Droit public des affaires',
  construction: 'Droit de la construction',
  minier: 'Droit minier',
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
    <main style={{ background: '#f3f4f6', minHeight: '100vh', paddingTop: '120px', paddingBottom: '7rem' }}>
      <div className="max-w-3xl mx-auto px-6">

        <div style={{ marginBottom: '3rem' }}>
          <a href="/ressources" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a7a96', textDecoration: 'none', marginBottom: '2.5rem' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Retour aux ressources
          </a>

          <div style={{ display: 'inline-block', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5a7a96', border: '1px solid rgba(90,122,150,0.35)', padding: '0.25rem 0.65rem', marginBottom: '1.5rem' }}>
            {domainLabels[article.domain] ?? article.domain}
          </div>

          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: '#252b35', margin: '0 0 1.2rem', lineHeight: 1.18 }}>
            {article.title}
          </h1>

          <p style={{ fontSize: '0.88rem', color: '#788090', lineHeight: 1.75, margin: '0 0 2rem', borderLeft: '3px solid #5a7a96', paddingLeft: '1.2rem' }}>
            {article.excerpt}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {article.tags.map(tag => (
              <span key={tag} style={{ fontSize: '0.55rem', color: '#788090', letterSpacing: '0.06em', background: 'rgba(37,43,53,0.06)', padding: '0.2rem 0.6rem' }}>{tag}</span>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(37,43,53,0.10)', paddingTop: '2.5rem', marginBottom: '3.5rem' }}>
          {article.content.map((para, i) => (
            <p key={i} style={{ fontSize: '0.88rem', color: '#3a3530', lineHeight: 1.85, margin: '0 0 1.4rem' }}>{para}</p>
          ))}
        </div>

        <div style={{ background: '#252b35', padding: '2.5rem', borderLeft: '4px solid #5a7a96' }}>
          <div style={{ fontSize: '0.55rem', letterSpacing: '0.22em', color: '#5a7a96', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Besoin d&apos;un conseil personnalisé ?
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(243,244,246,0.70)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
            Chaque situation est unique. Maître Bitie vous accompagne pour analyser votre dossier et défendre vos droits avec rigueur.
          </p>
          <a href="tel:+33614573726" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#5a7a96', color: '#f3f4f6', padding: '0.85rem 1.8rem', textDecoration: 'none', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Prendre rendez-vous
          </a>
        </div>

      </div>
    </main>
  )
}
