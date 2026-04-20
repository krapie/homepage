import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    <div className="page-root">

      {/* Background blobs */}
      <div className="bg-blobs">
        <div className="blob blob-top" />
        <div className="blob blob-bottom" />
      </div>

      {/* Header */}
      <header className="site-header">
        <button className="site-name" onClick={() => setTab('apps')}>
          {profile.name}
        </button>
        <nav className="tab-nav">
          {(['apps', 'about'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`tab-btn ${tab === t ? 'tab-btn--active' : ''}`}
            >
              {t}
            </button>
          ))}
        </nav>
      </header>

      {/* Main */}
      <main className="site-main">
        <AnimatePresence mode="wait">
          {tab === 'apps' ? (
            <motion.div key="apps" variants={fadeUp} initial="hidden" animate="show" exit="exit">
              <p className="section-label">Apps</p>
              <div className="app-grid">
                {apps.map((app) => (
                  <motion.a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className="app-card"
                  >
                    <span className="app-emoji">{app.emoji}</span>
                    <span className="app-name">{app.name}</span>
                    <span className="app-desc">{app.description}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="about" variants={fadeUp} initial="hidden" animate="show" exit="exit">
              <div className="about-text">{profile.about}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ '--hover-color': link.iconColor } as React.CSSProperties}
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
