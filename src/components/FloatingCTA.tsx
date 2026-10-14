'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MonogramAKB } from './Navbar'

const DOMAINES = [
  'Droit des affaires et fiscalité',
  'Droit des successions',
  'Droit public des affaires',
  'Droit de la construction et droit immobilier',
  'Droit minier',
  'Autre',
]

export default function FloatingCTA() {
  const [grown, setGrown] = useState(false)
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setGrown(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstFieldRef.current?.focus(), 80)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-contact-modal', handler)
    return () => window.removeEventListener('open-contact-modal', handler)
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setOpen(false)
      setTimeout(() => setSubmitted(false), 400)
    }, 2800)
  }

  return (
    <>
      {/* Pill button */}
      <div style={{
        position: 'fixed', bottom: '28px', right: '28px', zIndex: 150,
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: grown && !open ? 'scale(1.12)' : 'scale(1)',
      }}>
        <button
          onClick={() => { setOpen(true); setGrown(false) }}
          onMouseEnter={() => setGrown(true)}
          style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            background: '#252b35', color: '#f3f4f6',
            padding: '14px 24px', borderRadius: '999px',
            border: 'none', cursor: 'pointer',
            fontSize: '0.72rem', letterSpacing: '0.10em', textTransform: 'uppercase',
            fontWeight: 500,
            boxShadow: '0 4px 24px rgba(37,43,53,0.40), 0 1px 4px rgba(37,43,53,0.20)',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '10px', height: '10px', flexShrink: 0 }}>
            <span style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: '#5a7a96',
              animation: 'ctaping 1.6s ease-out infinite',
            }} />
            <span style={{ position: 'relative', width: '10px', height: '10px', borderRadius: '50%', background: '#7a9ab6', flexShrink: 0 }} />
          </span>
          Contacter le cabinet
        </button>
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(37,43,53,0.55)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div style={{
            background: '#fff', borderRadius: '16px',
            width: '100%', maxWidth: '480px',
            maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(37,43,53,0.30)',
          }}>
            {/* Header */}
            <div style={{
              position: 'sticky', top: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px 16px',
              background: '#fff',
              borderBottom: '1px solid rgba(37,43,53,0.08)',
              zIndex: 1,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MonogramAKB size={22} color="#5a7a96" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#252b35', letterSpacing: '0.01em' }}>
                  Prenons contact
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  border: 'none', background: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#788090', fontSize: '1rem',
                }}
              >✕</button>
            </div>

            <div style={{ padding: '24px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'rgba(90,122,150,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5L9.5 18L20 6" stroke="#5a7a96" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', color: '#252b35', marginBottom: '8px' }}>
                    Message reçu
                  </p>
                  <p style={{ fontSize: '0.80rem', color: '#788090', lineHeight: 1.65 }}>
                    Maître Bitie vous recontactera dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.15rem', fontWeight: 400, color: '#252b35', margin: '0 0 6px' }}>
                    Votre situation juridique
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#788090', margin: '0 0 24px', lineHeight: 1.60 }}>
                    Décrivez brièvement votre besoin — Maître Bitie vous répond dans les meilleurs délais.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Prénom + Nom */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                      <Field label="Prénom" name="prenom" required ref={firstFieldRef} />
                      <Field label="Nom" name="nom" required />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <Field label="Téléphone" name="telephone" type="tel" required placeholder="06 12 34 56 78" />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <Field label="Email" name="email" type="email" required />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={labelStyle}>Domaine d&apos;intervention</label>
                      <div style={{ position: 'relative' }}>
                        <select
                          name="domaine"
                          defaultValue=""
                          style={{
                            width: '100%', appearance: 'none',
                            border: '1px solid rgba(37,43,53,0.18)',
                            borderRadius: '8px', background: '#fff',
                            padding: '9px 32px 9px 12px',
                            fontSize: '0.78rem', color: '#252b35',
                            outline: 'none',
                          }}
                        >
                          <option value="" disabled>Sélectionner</option>
                          {DOMAINES.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#788090" strokeWidth="2" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={labelStyle}>Votre situation</label>
                      <textarea
                        name="situation"
                        rows={3}
                        placeholder="Décrivez brièvement votre dossier ou votre question..."
                        style={{
                          width: '100%', boxSizing: 'border-box',
                          border: '1px solid rgba(37,43,53,0.18)',
                          borderRadius: '8px', background: '#fff',
                          padding: '9px 12px',
                          fontSize: '0.78rem', color: '#252b35',
                          resize: 'vertical', outline: 'none',
                          fontFamily: 'inherit',
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%', padding: '13px',
                        background: '#252b35', color: '#f3f4f6',
                        border: 'none', borderRadius: '8px',
                        fontSize: '0.80rem', fontWeight: 600,
                        letterSpacing: '0.04em', cursor: 'pointer',
                        marginBottom: '16px',
                      }}
                    >
                      Envoyer ma demande
                    </button>

                    <p style={{ fontSize: '0.65rem', color: '#788090', textAlign: 'center', lineHeight: 1.55, margin: 0 }}>
                      Ces informations sont transmises à Maître Bitie dans le strict respect de votre vie privée. Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes ctaping {
          0%   { transform: scale(1); opacity: 0.75; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.68rem', fontWeight: 500,
  color: '#788090', marginBottom: '5px',
  letterSpacing: '0.01em',
}

const Field = React.forwardRef<HTMLInputElement, {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}>(function Field({ label, name, type = 'text', required, placeholder }, ref) {
  return (
    <div>
      <label style={labelStyle}>{label}{required && <span style={{ color: '#5a7a96' }}> *</span>}</label>
      <input
        ref={ref}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%', boxSizing: 'border-box',
          border: '1px solid rgba(37,43,53,0.18)',
          borderRadius: '8px', background: '#fff',
          padding: '9px 12px',
          fontSize: '0.78rem', color: '#252b35',
          outline: 'none', fontFamily: 'inherit',
        }}
      />
    </div>
  )
})

