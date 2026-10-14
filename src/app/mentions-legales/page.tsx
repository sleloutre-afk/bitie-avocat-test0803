export const metadata = {
  title: 'Mentions légales — Maître Abdoul Kader Bitie, Avocat',
  description: 'Mentions légales du site de Maître Abdoul Kader Bitie, avocat au Barreau de Bordeaux et du Burkina Faso.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{
      fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400,
      color: '#252b35', margin: '0 0 1rem', letterSpacing: '-0.01em',
    }}>{title}</h2>
    <div style={{ fontSize: '0.85rem', color: '#788090', lineHeight: 1.80 }}>
      {children}
    </div>
  </div>
)

import React from 'react'

export default function MentionsLegales() {
  return (
    <main style={{ background: '#f3f4f6', minHeight: '100vh', paddingTop: '120px', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#5a7a96' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#5a7a96', textTransform: 'uppercase' }}>
              Informations légales
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 400, color: '#252b35', margin: 0, lineHeight: 1.18,
          }}>
            Mentions légales
          </h1>
        </div>

        <Section title="Éditeur du site">
          <p style={{ margin: '0 0 0.4rem' }}>Maître Abdoul Kader Bitie</p>
          <p style={{ margin: '0 0 0.4rem' }}>Avocat inscrit au Barreau de Bordeaux et au Barreau du Burkina Faso</p>
          <p style={{ margin: '0 0 0.4rem' }}>37 rue Colonel Grandier-Vazeille — 33000 Bordeaux</p>
          <p style={{ margin: '0 0 0.4rem' }}>Téléphone : +33 6 14 57 37 26</p>
          <p style={{ margin: 0 }}>Email : <a href="mailto:akbitie.avocat@gmail.com" style={{ color: '#5a7a96', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a></p>
        </Section>

        <Section title="Hébergement">
          <p style={{ margin: '0 0 0.4rem' }}>Vercel Inc.</p>
          <p style={{ margin: '0 0 0.4rem' }}>340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</p>
          <p style={{ margin: 0 }}>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5a7a96', textDecoration: 'none' }}>
              www.vercel.com
            </a>
          </p>
        </Section>

        <Section title="Création">
          <p style={{ margin: 0 }}>
            TheOtter —{' '}
            <a href="https://www.theotter.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#5a7a96', textDecoration: 'none' }}>
              www.theotter.fr
            </a>
          </p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p style={{ margin: 0 }}>
            L'ensemble du contenu de ce site (textes, visuels, structure) est la propriété exclusive de Maître Abdoul Kader Bitie, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>
        </Section>

        <Section title="Responsabilité">
          <p style={{ margin: 0 }}>
            Les informations publiées sur ce site ont un caractère général et ne constituent pas un conseil juridique. Elles ne sauraient engager la responsabilité de l'éditeur. Pour toute question relative à votre situation personnelle, il est recommandé de consulter un professionnel du droit.
          </p>
        </Section>

        <Section title="Données personnelles">
          <p style={{ margin: 0 }}>
            Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande. Elles ne sont ni cédées ni revendues à des tiers. Conformément au Règlement général sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez :{' '}
            <a href="mailto:akbitie.avocat@gmail.com" style={{ color: '#5a7a96', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a>.
          </p>
        </Section>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(37,43,53,0.10)' }}>
          <a href="/" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a7a96', textDecoration: 'none' }}>
            ← Retour au site
          </a>
        </div>

      </div>
    </main>
  )
}
