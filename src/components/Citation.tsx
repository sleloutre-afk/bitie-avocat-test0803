export default function Citation() {
  return (
    <section style={{ background: '#e4ddd4', padding: '6rem 0' }}>
      <div className="max-w-4xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" style={{ marginBottom: '2.5rem', opacity: 0.20 }}>
          <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6 6.4 9.6H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 6 24.4 9.6H30V24H18z" fill="#2e2b28"/>
        </svg>

        <blockquote style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          fontWeight: 400, fontStyle: 'italic',
          color: '#2e2b28', lineHeight: 1.55,
          margin: '0 0 2.5rem', letterSpacing: '-0.01em',
        }}>
          Qu&apos;il s&apos;agisse de défendre un salarié injustement licencié, d&apos;accompagner un étranger dans ses démarches ou de protéger un entrepreneur face à un litige commercial, mon engagement est le même : écouter, analyser, agir avec méthode et conviction.
        </blockquote>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ width: '32px', height: '1px', background: '#c08a40' }} />
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.20em', color: '#c08a40', textTransform: 'uppercase' }}>
            Maître Abdoul Kader Bitie
          </span>
          <div style={{ width: '32px', height: '1px', background: '#c08a40' }} />
        </div>

      </div>
    </section>
  )
}
