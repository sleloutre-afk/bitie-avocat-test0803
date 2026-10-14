export const metadata = {
  title: 'Politique de confidentialité — Maître Abdoul Kader Bitie, Avocat',
  description: 'Politique de confidentialité et traitement des données personnelles du site de Maître Abdoul Kader Bitie.',
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

export default function PolitiqueConfidentialite() {
  return (
    <main style={{ background: '#f3f4f6', minHeight: '100vh', paddingTop: '120px', paddingBottom: '7rem' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '1px', background: '#5a7a96' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#5a7a96', textTransform: 'uppercase' }}>
              Protection des données
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: 400, color: '#252b35', margin: 0, lineHeight: 1.18,
          }}>
            Politique de confidentialité
          </h1>
        </div>

        <Section title="Responsable du traitement">
          <p style={{ margin: 0 }}>
            Maître Abdoul Kader Bitie, avocat au Barreau de Bordeaux et au Barreau du Burkina Faso, 37 rue Colonel Grandier-Vazeille, 33000 Bordeaux — <a href="mailto:akbitie.avocat@gmail.com" style={{ color: '#5a7a96', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a>.
          </p>
        </Section>

        <Section title="Données collectées">
          <p style={{ margin: '0 0 0.6rem' }}>
            Lors de l'utilisation du formulaire de contact, les données suivantes peuvent être collectées :
          </p>
          <ul style={{ margin: '0 0 0.6rem', paddingLeft: '1.4rem' }}>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Domaine juridique concerné</li>
            <li>Description libre de votre situation</li>
          </ul>
          <p style={{ margin: 0 }}>
            Aucune donnée n'est collectée à votre insu. La navigation sur ce site n'implique pas de dépôt de cookies publicitaires ou de traceurs tiers.
          </p>
        </Section>

        <Section title="Finalité du traitement">
          <p style={{ margin: 0 }}>
            Les données transmises via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande et, le cas échéant, établir une relation client dans le cadre d'une mission juridique. Elles ne font l'objet d'aucune cession, revente ou exploitation à des fins commerciales.
          </p>
        </Section>

        <Section title="Durée de conservation">
          <p style={{ margin: 0 }}>
            Les données sont conservées pour la durée strictement nécessaire à la gestion de votre demande, et au maximum pour la durée légale applicable aux obligations professionnelles de l'avocat.
          </p>
        </Section>

        <Section title="Vos droits">
          <p style={{ margin: '0 0 0.6rem' }}>
            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul style={{ margin: '0 0 0.6rem', paddingLeft: '1.4rem' }}>
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p style={{ margin: 0 }}>
            Pour exercer ces droits, adressez votre demande par email à{' '}
            <a href="mailto:akbitie.avocat@gmail.com" style={{ color: '#5a7a96', textDecoration: 'none' }}>akbitie.avocat@gmail.com</a>
            {' '}ou par courrier à l'adresse du cabinet. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#5a7a96', textDecoration: 'none' }}>www.cnil.fr</a>).
          </p>
        </Section>

        <Section title="Hébergement et transfert de données">
          <p style={{ margin: 0 }}>
            Ce site est hébergé par Vercel Inc. (San Francisco, États-Unis). Les données transitant par le formulaire de contact peuvent être traitées sur des serveurs situés hors de l'Union européenne. Vercel est certifié conforme au cadre de protection des données EU-États-Unis.
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
