export default function Cabinet() {
  return (
    <section id="cabinet" style={{ background: '#f3f4f6', padding: '7rem 0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'center' }}>

          {/* Photo panel */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px',
              width: '120px', height: '120px',
              border: '1px solid rgba(90,122,150,0.30)', zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              aspectRatio: '4/5',
              overflow: 'hidden',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bitie.png"
                alt="Maître Abdoul Kader Bitie — Avocat"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: '-16px', right: '-16px', zIndex: 2,
              background: '#5a7a96', color: '#f3f4f6',
              padding: '1rem 1.5rem',
              fontFamily: 'var(--font-playfair)', fontSize: '0.75rem', letterSpacing: '0.10em',
            }}>
              Docteur en droit · EDA 2019
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
              <div style={{ width: '28px', height: '1px', background: '#5a7a96' }} />
              <span style={{ fontSize: '0.58rem', letterSpacing: '0.25em', color: '#5a7a96', textTransform: 'uppercase' }}>Le cabinet</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400, color: '#252b35',
              margin: '0 0 2rem', lineHeight: 1.18, letterSpacing: '-0.01em',
            }}>
              Un accompagnement rigoureux,<br />
              <em style={{ color: '#5a7a96', fontStyle: 'italic' }}>à chaque étape</em>
            </h2>

            <p style={{ fontSize: '0.88rem', color: '#788090', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Maître Abdoul Kader Bitie est docteur en droit international de l&apos;Université de Bordeaux (2016) et avocat diplômé de l&apos;EDA Aliénor (promo 2019). Il a prêté serment dans la foulée au Barreau de Bordeaux, puis au Barreau du Burkina Faso. Ce double ancrage académique et international nourrit une pratique attentive aux dimensions transfrontalières des dossiers.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#788090', lineHeight: 1.80, margin: '0 0 1.2rem' }}>
              Son cabinet accompagne particuliers et entreprises dans des domaines complémentaires : droit des affaires et fiscalité, droit des successions, droit public des affaires, droit de la construction et droit immobilier, droit minier.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#788090', lineHeight: 1.80, margin: 0 }}>
              Installé au cœur de Bordeaux, le cabinet reçoit sur rendez-vous et accompagne ses clients aussi bien en conseil qu&apos;en contentieux, devant toutes les juridictions compétentes en France comme à l&apos;international.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
