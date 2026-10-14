'use client'

const modes = [
  {
    titre: 'Convention d\'honoraires',
    texte: "Conformément à la loi du 31 décembre 1971, une convention d'honoraires écrite est établie avant toute intervention. Elle précise le mode de calcul des honoraires, le taux horaire et, dans la mesure du possible, une estimation prévisionnelle tenant compte de la nature et de la complexité du dossier.",
  },
  {
    titre: 'Honoraire au temps passé',
    texte: "Pour les dossiers de droit des étrangers, du travail ou commercial, les honoraires sont le plus souvent calculés au temps passé sur la base d'un taux horaire défini dans la convention. Un relevé de diligences détaillé est fourni sur demande pour assurer une transparence totale.",
  },
  {
    titre: 'Honoraire forfaitaire',
    texte: "Des forfaits sont proposés pour certaines prestations délimitées : demande de titre de séjour, recours contre une OQTF, rédaction de contrat commercial ou consultation juridique initiale. Le montant est fixé à l'avance et ne varie pas en fonction du temps effectivement consacré.",
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" style={{ background: '#252b35', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'start' }}>

          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#5a7a96' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#5a7a96', textTransform: 'uppercase' }}>Honoraires</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 400, color: '#f3f4f6',
              margin: '0 0 2rem', lineHeight: 1.18,
            }}>
              Transparence<br />
              <em style={{ color: '#5a7a96', fontStyle: 'italic' }}>dès le premier contact</em>
            </h2>

            <p style={{ fontSize: '0.88rem', color: 'rgba(243,244,246,0.60)', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Les honoraires sont librement fixés en accord avec le client, en fonction de la nature du dossier, de sa complexité et du temps à y consacrer. Maître Bitie s&apos;engage à une information claire et préalable sur les coûts prévisibles.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(243,244,246,0.60)', lineHeight: 1.80, margin: 0 }}>
              Une provision sur honoraires peut être demandée en début de mission. Des facilités de paiement peuvent être accordées selon les situations.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: '#5a7a96', color: '#f3f4f6',
                  padding: '1rem 2.2rem', border: 'none', cursor: 'pointer',
                  fontSize: '0.70rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                }}>
                Demander un devis
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {modes.map((m, i) => (
              <div key={i} style={{
                padding: '1.8rem 0',
                borderBottom: i < modes.length - 1 ? '1px solid rgba(243,244,246,0.07)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-playfair)', fontSize: '1.2rem',
                    color: 'rgba(90,122,150,0.40)', lineHeight: 1, flexShrink: 0,
                    minWidth: '1.5rem', fontStyle: 'italic',
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', letterSpacing: '0.10em', color: '#5a7a96', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                      {m.titre}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(243,244,246,0.55)', lineHeight: 1.75, margin: 0 }}>
                      {m.texte}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
