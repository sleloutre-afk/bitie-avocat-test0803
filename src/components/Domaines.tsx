const domaines = [
  {
    id: 'etranger',
    icon: '/migrant.svg',
    titre: 'Droit des étrangers',
    description: "Titres de séjour, cartes de résident, regroupement familial, naturalisation, recours contre les refus de visa et les OQTF. Maître Bitie accompagne les ressortissants étrangers dans toutes leurs démarches administratives et contentieuses devant le tribunal administratif.",
  },
  {
    id: 'travail',
    icon: '/travail.svg',
    titre: 'Droit du travail',
    description: "Licenciement abusif, rupture conventionnelle, harcèlement moral ou sexuel, discrimination, heures supplémentaires impayées. Le cabinet défend aussi bien les salariés que les employeurs, en conseil préventif comme devant le conseil de prud'hommes.",
  },
  {
    id: 'commercial',
    icon: '/commercial.svg',
    titre: 'Droit commercial',
    description: "Création et gestion de sociétés, rédaction et négociation de contrats commerciaux, baux commerciaux, litiges entre associés ou avec des partenaires commerciaux. Un accompagnement juridique adapté aux besoins des TPE, PME et entrepreneurs individuels.",
  },
  {
    id: 'assurance',
    icon: '/assurance.svg',
    titre: 'Droit des assurances',
    description: "Contestation des refus d'indemnisation, litiges avec les assureurs en matière d'accidents corporels, de sinistres immobiliers ou de responsabilité civile. Maître Bitie défend les droits des assurés face aux compagnies d'assurance à chaque étape de la procédure.",
  },
  {
    id: 'fiscal',
    icon: '/fiscal.svg',
    titre: 'Droit fiscal',
    description: "Assistance lors des contrôles fiscaux, contestation des redressements, recours devant les juridictions administratives, optimisation fiscale dans le cadre légal. Le cabinet intervient pour les particuliers comme pour les professionnels face à l'administration fiscale.",
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#fff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#c08a40' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#c08a40', textTransform: 'uppercase' }}>
              Domaines d&apos;intervention
            </span>
            <div style={{ width: '24px', height: '1px', background: '#c08a40' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#2e2b28', margin: 0, lineHeight: 1.20,
          }}>
            Conseil et défense pour particuliers et entreprises
          </h2>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {domaines.slice(0, 3).map(d => (
            <div key={d.id} style={{ border: '1px solid rgba(46,43,40,0.10)', padding: '2.4rem 2rem', background: '#f1ede5' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.icon} alt="" style={{ width: '36px', height: '36px', marginBottom: '1.5rem', opacity: 0.65 }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#2e2b28', margin: '0 0 1rem', lineHeight: 1.30 }}>
                {d.titre}
              </h3>
              <p style={{ fontSize: '0.80rem', color: '#686460', lineHeight: 1.75, margin: 0 }}>{d.description}</p>
            </div>
          ))}
        </div>

        <div className="md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem', maxWidth: '820px', margin: '0 auto' }}>
          {domaines.slice(3).map(d => (
            <div key={d.id} style={{ border: '1px solid rgba(46,43,40,0.10)', padding: '2.4rem 2rem', background: '#f1ede5' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.icon} alt="" style={{ width: '36px', height: '36px', marginBottom: '1.5rem', opacity: 0.65 }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#2e2b28', margin: '0 0 1rem', lineHeight: 1.30 }}>
                {d.titre}
              </h3>
              <p style={{ fontSize: '0.80rem', color: '#686460', lineHeight: 1.75, margin: 0 }}>{d.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
