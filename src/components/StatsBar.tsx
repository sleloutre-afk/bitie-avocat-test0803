export default function StatsBar() {
  const stats = [
    { value: 'Docteur en droit', label: 'Université de Bordeaux · 2016' },
    { value: 'Double barreau', label: 'Bordeaux & Burkina Faso' },
    { value: 'Bilingue FR / EN', label: 'Conseil en français et anglais' },
    { value: '06 14 57 37 26', label: 'Contact direct' },
  ]

  return (
    <section style={{ background: '#252b35', borderBottom: '1px solid rgba(90,122,150,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={i < 3 ? 'stat-sep' : undefined} style={{ padding: '2.2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.0rem, 2vw, 1.55rem)', color: '#5a7a96', fontWeight: 400, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.60rem', color: 'rgba(243,244,246,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
