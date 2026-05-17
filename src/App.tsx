import React, { useState, useEffect } from 'react'
import { profile, apps } from './data/content'

function KaraokeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  )
}

function PlumberIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.65 2.65 0 0021 17.25l-5.83-5.83m-3.75 3.75l-2.36 2.36a2.65 2.65 0 01-3.75-3.75l2.36-2.36m3.75 3.75l3.75-3.75m-3.75 3.75L8.91 8.91M15.17 11.42a4.5 4.5 0 00-6.26-6.26 4.5 4.5 0 00-1.21 4.21L4 13.07a2.65 2.65 0 003.75 3.75l3.7-3.7a4.5 4.5 0 003.72-1.7z" />
    </svg>
  )
}

function TinyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.69a4.5 4.5 0 016.36 6.36l-3.18 3.18a4.5 4.5 0 01-6.36-6.36m6.36-3.18l-3.18 3.18m-3.18 3.18l-3.18 3.18a4.5 4.5 0 01-6.36-6.36l3.18-3.18a4.5 4.5 0 016.36 0" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

const APP_ICONS: Record<string, () => React.ReactElement> = {
  Karaoke: KaraokeIcon,
  Plumber: PlumberIcon,
  Tiny: TinyIcon,
  Play: PlayIcon,
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.06 1.06M17.34 17.34l1.06 1.06M5.6 18.4l1.06-1.06M17.34 6.66l1.06-1.06" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  )
}

export default function App() {
  const [tab, setTab] = useState<'apps' | 'about'>('apps')
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const aboutParagraphs = profile.about
    .split('\n\n')
    .map(p => p.replace(/\n/g, ' ').trim())
    .filter(Boolean)

  return (
    <div className="page-root">
      <header className="kp-header">
        <button className="brand" onClick={() => setTab('apps')} aria-label="kevinprk home">
          <span className="pi-mark">π</span>
          <span>Kevin Park</span>
        </button>
        <div className="kp-header-right">
          <nav>
            <a href="#apps" onClick={() => setTab('apps')}>apps</a>
            <a href="#about" onClick={() => setTab('about')}>about</a>
          </nav>
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            aria-label="toggle theme"
            title="toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      {tab === 'apps' ? (
        <main className="kp-home">
          <section className="intro">
            <h1>A few small tools.</h1>
            <p>
              This is where I park things I make for myself. Mostly utilities,
              sometimes references. Nothing here is a product. Take what's useful.
            </p>
          </section>

          <section id="apps">
            <div className="section-label">apps</div>
            <div role="list">
              {apps.map(app => {
                const Icon = APP_ICONS[app.name]
                return (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kp-app-row"
                    role="listitem"
                  >
                    <span className="glyph">{Icon && <Icon />}</span>
                    <span>
                      <div className="name">{app.name}</div>
                      <div className="desc">{app.description}</div>
                    </span>
                    <span className="arrow">→</span>
                  </a>
                )
              })}
            </div>
          </section>
        </main>
      ) : (
        <main className="kp-about" id="about">
          <div className="section-label">about</div>
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="kp-social-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="kp-social-link">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="kp-social-link">
              LinkedIn
            </a>
          </div>
        </main>
      )}

      <footer className="kp-footer">
        <span>© {new Date().getFullYear()} kevin park</span>
        <span className="pi" title="3.14">π</span>
      </footer>
    </div>
  )
}
