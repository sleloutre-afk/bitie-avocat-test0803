export default function StatsBar() {
  const stats = [
    { value: '6 ans', label: "d'exercice au barreau" },
    { value: 'Bordeaux', label: 'Barreau depuis 2020' },
    { value: 'Étrangers · Travail', label: 'Domaines principaux' },
    { value: '06 27 83 91 53', label: 'Contact direct' },
  ]

  return (
    <section style={{ background: '#2e2b28', borderBottom: '1px solid rgba(192,138,64,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={i < 3 ? 'stat-sep' : undefined} style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.0rem, 2vw, 1.55rem)', color: '#c08a40', fontWeight: 400, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.60rem', color: 'rgba(241,237,229,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
