'use client'

import { useState, useEffect } from 'react'

export function MonogramAKB({ color = 'currentColor', size = 36 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16.5" stroke={color} strokeWidth="0.8"/>
      <text x="18" y="21.5" textAnchor="middle"
        fontFamily="var(--font-playfair), Georgia, serif"
        fontSize="8.5" fill={color} letterSpacing="2">
        AKB
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nameColor = scrolled ? '#2e2b28' : '#f1ede5'
  const subColor  = scrolled ? '#686460' : 'rgba(241,237,229,0.55)'
  const linkColor = scrolled ? '#686460' : 'rgba(241,237,229,0.80)'
  const ctaBg     = scrolled ? '#2e2b28' : 'rgba(192,138,64,0.85)'
  const ctaColor  = scrolled ? '#f1ede5' : '#111010'
  const logoColor = scrolled ? '#2e2b28' : 'rgba(241,237,229,0.85)'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(241,237,229,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(46,43,40,0.08)' : '1px solid transparent',
      transition: 'background 0.35s ease, border-color 0.35s ease',
    }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <MonogramAKB color={logoColor} />
          <div>
            <div style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.92rem', color: nameColor, letterSpacing: '0.02em', lineHeight: 1.2, transition: 'color 0.35s ease' }}>
              Maître Abdoul Kader Bitie
            </div>
            <div style={{ fontSize: '0.55rem', letterSpacing: '0.20em', color: subColor, textTransform: 'uppercase', marginTop: '1px', transition: 'color 0.35s ease' }}>
              Avocat · Étrangers · Travail · Bordeaux
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Cabinet', href: '#cabinet' },
            { label: 'Domaines', href: '#domaines' },
            { label: 'Honoraires', href: '#honoraires' },
            { label: 'Ressources', href: '#ressources' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{
              fontSize: '0.72rem', letterSpacing: '0.08em', color: linkColor,
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'color 0.35s ease',
            }}>
              {link.label}
            </a>
          ))}
          <a href="tel:+33627839153" style={{
            fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: ctaColor, background: ctaBg,
            padding: '0.6rem 1.4rem', textDecoration: 'none',
            transition: 'background 0.35s ease, color 0.35s ease',
          }}>
            06 27 83 91 53
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Menu"
        >
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '1.5px', background: scrolled ? 'rgba(46,43,40,0.8)' : 'rgba(255,255,255,0.8)', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', height: '1.5px', background: scrolled ? 'rgba(46,43,40,0.8)' : 'rgba(255,255,255,0.8)', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '1.5px', background: scrolled ? 'rgba(46,43,40,0.8)' : 'rgba(255,255,255,0.8)', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </div>
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col" style={{ background: 'rgba(241,237,229,0.96)', padding: '8px 24px 24px', borderTop: '1px solid rgba(46,43,40,0.08)' }}>
          {[
            { label: 'Cabinet', href: '#cabinet' },
            { label: 'Domaines', href: '#domaines' },
            { label: 'Honoraires', href: '#honoraires' },
            { label: 'Ressources', href: '#ressources' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: '#2e2b28', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid rgba(46,43,40,0.07)', textDecoration: 'none' }}>
              {link.label}
            </a>
          ))}
          <a href="tel:+33627839153" onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: '1rem', padding: '0.8rem 1.2rem', background: '#2e2b28', color: '#f1ede5', fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
            06 27 83 91 53
          </a>
        </div>
      )}
    </nav>
  )
}
