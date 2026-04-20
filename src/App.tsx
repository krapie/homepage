import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './components/ui/Icons'
import { profile, apps } from './data/content'

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon, iconColor: '#cbd5e1' },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon, iconColor: '#38bdf8' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export default function App() {
  const [tab, setTab] = useState<'apps' | 'about'>('apps')

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f1f5f9',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '40rem',
      margin: '0 auto',
      padding: '0 1.5rem',
    }}>

      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-8rem', left: '-8rem',
          width: '28rem', height: '28rem', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-8rem', right: '-8rem',
          width: '28rem', height: '28rem', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
        }} />
      </div>

      {/* Header */}
      <header style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.75rem 0 1.5rem',
        borderBottom: '1px solid rgba(51,65,85,0.5)',
      }}>
        <button
          onClick={() => setTab('apps')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.02em',
          }}
        >
          {profile.name}
        </button>

        <nav style={{ display: 'flex', gap: '0.25rem' }}>
          {(['apps', 'about'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '0.35rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: tab === t ? 600 : 400,
                color: tab === t ? '#f1f5f9' : '#64748b',
                backgroundColor: tab === t ? 'rgba(51,65,85,0.5)' : 'transparent',
                transition: 'all 0.15s',
                textTransform: 'capitalize',
              }}
            >
              {t}
            </button>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1, flex: 1, padding: '2.5rem 0' }}>
        <AnimatePresence mode="wait">
          {tab === 'apps' ? (
            <motion.div key="apps" variants={fadeUp} initial="hidden" animate="show" exit="exit">
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: '#475569', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Apps
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {apps.map((app) => (
                  <motion.a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '1.25rem 1.5rem',
                      borderRadius: '0.875rem',
                      border: '1px solid rgba(51,65,85,0.6)',
                      background: 'rgba(15,23,42,0.5)',
                      backdropFilter: 'blur(12px)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{app.emoji}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                          {app.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {app.description}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight size={15} style={{ color: '#475569', flexShrink: 0 }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="about" variants={fadeUp} initial="hidden" animate="show" exit="exit">
              <div style={{
                fontSize: '0.95rem', lineHeight: 1.8, color: '#94a3b8',
                whiteSpace: 'pre-line',
              }}>
                {profile.about}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer style={{
        position: 'relative', zIndex: 1,
        borderTop: '1px solid rgba(51,65,85,0.5)',
        padding: '1.5rem 0',
        display: 'flex', gap: '1.5rem', justifyContent: 'center',
      }}>
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                color: '#475569', textDecoration: 'none', fontSize: '0.8rem',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = link.iconColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <Icon size={15} />
              <span>{link.label}</span>
            </a>
          )
        })}
      </footer>
    </div>
  )
}
