const domaines = [
  {
    id: 'affaires',
    icon: '/commercial.svg',
    titre: 'Droit des affaires et fiscalité',
    description: "Création et gestion de sociétés, rédaction et négociation de contrats commerciaux, baux commerciaux, litiges entre associés. Assistance lors des contrôles fiscaux, contestation des redressements et optimisation fiscale dans le cadre légal pour particuliers et entreprises.",
  },
  {
    id: 'successions',
    icon: '/fiscal.svg',
    titre: 'Droit des successions',
    description: "Règlement des successions, partages amiables et judiciaires, contestation de testaments, protection des héritiers réservataires, indivisions successorales. Le cabinet accompagne les familles dans toutes les étapes du règlement successoral, en France comme à l'international.",
  },
  {
    id: 'public',
    icon: '/travail.svg',
    titre: 'Droit public des affaires',
    description: "Contrats publics, marchés publics, concessions, partenariats public-privé, responsabilité de la puissance publique. Maître Bitie accompagne les opérateurs économiques dans leurs relations avec les personnes publiques et les défend devant les juridictions administratives.",
  },
  {
    id: 'construction',
    icon: '/assurance.svg',
    titre: 'Droit de la construction et droit immobilier',
    description: "Responsabilité des constructeurs, garanties décennale et biennale, malfaçons, litiges de voisinage, copropriété, baux d'habitation et commerciaux. Un accompagnement complet pour les maîtres d'ouvrage, promoteurs, architectes et particuliers en matière immobilière.",
  },
  {
    id: 'minier',
    icon: '/mine.svg',
    titre: 'Droit minier',
    description: "Permis de recherche et d'exploitation minière, concessions, litiges avec l'administration minière, responsabilité environnementale liée aux activités extractives. Expertise particulière sur les législations minières d'Afrique de l'Ouest, notamment du Burkina Faso.",
  },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ background: '#fff', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: '1.2rem' }}>
            <div style={{ width: '24px', height: '1px', background: '#5a7a96' }} />
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#5a7a96', textTransform: 'uppercase' }}>
              Domaines d&apos;intervention
            </span>
            <div style={{ width: '24px', height: '1px', background: '#5a7a96' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
            fontWeight: 400, color: '#252b35', margin: 0, lineHeight: 1.20,
          }}>
            Conseil et défense pour particuliers et entreprises
          </h2>
        </div>

        <div className="md:grid-cols-3" style={{ display: 'grid', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {domaines.slice(0, 3).map(d => (
            <div key={d.id} className="domaine-card" style={{ border: '1px solid rgba(37,43,53,0.10)', padding: '2.4rem 2rem', background: '#f3f4f6' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.icon} alt="" style={{ width: '36px', height: '36px', marginBottom: '1.5rem', opacity: 0.65 }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#252b35', margin: '0 0 1rem', lineHeight: 1.30 }}>
                {d.titre}
              </h3>
              <p style={{ fontSize: '0.80rem', color: '#788090', lineHeight: 1.75, margin: 0 }}>{d.description}</p>
            </div>
          ))}
        </div>

        <div className="md:grid-cols-2" style={{ display: 'grid', gap: '1.5rem', maxWidth: '820px', margin: '0 auto' }}>
          {domaines.slice(3).map(d => (
            <div key={d.id} className="domaine-card" style={{ border: '1px solid rgba(37,43,53,0.10)', padding: '2.4rem 2rem', background: '#f3f4f6' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.icon} alt="" style={{ width: '36px', height: '36px', marginBottom: '1.5rem', opacity: 0.65 }} />
              <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#252b35', margin: '0 0 1rem', lineHeight: 1.30 }}>
                {d.titre}
              </h3>
              <p style={{ fontSize: '0.80rem', color: '#788090', lineHeight: 1.75, margin: 0 }}>{d.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
