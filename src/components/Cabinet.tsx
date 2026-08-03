import { MonogramAKB } from './Navbar'

export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f1ede5', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'center' }}>

          {/* Monogram panel */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px',
              width: '120px', height: '120px',
              border: '1px solid rgba(192,138,64,0.30)', zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              background: '#2e2b28',
              aspectRatio: '4/5',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <MonogramAKB size={200} color="rgba(192,138,64,0.07)" />
              <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                <MonogramAKB size={72} color="rgba(192,138,64,0.70)" />
                <div style={{ width: '32px', height: '1px', background: 'rgba(192,138,64,0.40)' }} />
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(241,237,229,0.35)', textTransform: 'uppercase' }}>Avocat</span>
              </div>
            </div>
            <div style={{
              position: 'absolute', bottom: '-16px', right: '-16px', zIndex: 2,
              background: '#c08a40', color: '#f1ede5',
              padding: '1rem 1.5rem',
              fontFamily: 'var(--font-playfair)', fontSize: '0.75rem', letterSpacing: '0.10em',
            }}>
              Serment 2020
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#c08a40' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#c08a40', textTransform: 'uppercase' }}>Le cabinet</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: '#2e2b28',
              margin: '0 0 2rem', lineHeight: 1.18, letterSpacing: '-0.01em',
            }}>
              Un accompagnement rigoureux,<br />
              <em style={{ color: '#c08a40', fontStyle: 'italic' }}>à chaque étape</em>
            </h2>

            <p style={{ fontSize: '0.88rem', color: '#686460', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Maître Abdoul Kader Bitie a prêté serment en 2020 au Barreau de Bordeaux, après avoir soutenu une thèse de droit public à l&apos;Université de Bordeaux portant sur la prévention des conflits en droit international. Ce parcours académique exigeant nourrit une pratique attentive aux dimensions humaines et procédurales des dossiers.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#686460', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Son cabinet accompagne aussi bien les particuliers que les entreprises dans des domaines complémentaires : droit des étrangers, droit du travail, droit commercial, droit des assurances et droit fiscal. Il intervient également en droit médical et au titre de l&apos;aide juridictionnelle.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#686460', lineHeight: 1.80, margin: 0 }}>
              Installé au cœur de Bordeaux, le cabinet reçoit sur rendez-vous et accompagne ses clients aussi bien en conseil qu&apos;en contentieux, devant toutes les juridictions compétentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
