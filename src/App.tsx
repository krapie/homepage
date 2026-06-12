import { useState, useEffect } from 'react'
import { FEATURED_APPS, NOTES, profile, type AppData, type NoteData } from './data/content'

type Theme = 'light' | 'dark'

// ── Icon components ──────────────────────────────────────────────────────────

function KaraokeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  )
}

function PlumberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.65 2.65 0 0021 17.25l-5.83-5.83m-3.75 3.75l-2.36 2.36a2.65 2.65 0 01-3.75-3.75l2.36-2.36m3.75 3.75l3.75-3.75m-3.75 3.75L8.91 8.91M15.17 11.42a4.5 4.5 0 00-6.26-6.26 4.5 4.5 0 00-1.21 4.21L4 13.07a2.65 2.65 0 003.75 3.75l3.7-3.7a4.5 4.5 0 003.72-1.7z" />
    </svg>
  )
}

function TinyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.69a4.5 4.5 0 016.36 6.36l-3.18 3.18a4.5 4.5 0 01-6.36-6.36m6.36-3.18l-3.18 3.18m-3.18 3.18l-3.18 3.18a4.5 4.5 0 01-6.36-6.36l3.18-3.18a4.5 4.5 0 016.36 0" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  )
}

const APP_ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  karaoke: KaraokeIcon,
  plumber: PlumberIcon,
  tiny:    TinyIcon,
}

// ── Components ───────────────────────────────────────────────────────────────

function AppCard({ app }: { app: AppData }) {
  const Icon = APP_ICONS[app.id]
  return (
    <a href={app.url} target="_blank" rel="noopener noreferrer" className="kp-app-card">
      <div className="ac-icon-wrap">
        {Icon && <Icon className="ac-icon" />}
      </div>
      <div className="ac-body">
        <div className="ac-name">{app.name}</div>
        <div className="ac-desc">{app.desc}</div>
      </div>
      <div className="ac-arrow">→</div>
    </a>
  )
}

function NoteTeaser({ note }: { note: NoteData }) {
  return (
    <a
      href={`https://note.kevinprk.com/${note.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="kp-note-teaser"
    >
      <div className="kp-note-teaser-meta">
        <span className="kp-note-teaser-date">{note.date}</span>
        <span className="kp-note-teaser-tag">{note.tags[0]}</span>
      </div>
      <div className="kp-note-teaser-body">
        <div className="kp-note-teaser-title">{note.title}</div>
        <div className="kp-note-teaser-summary">{note.blurb}</div>
      </div>
      <div className="kp-note-teaser-link">→</div>
    </a>
  )
}

// ── Shell ────────────────────────────────────────────────────────────────────

function Header({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  return (
    <header className="kp-header">
      <a href="/" className="kp-brand" aria-label="home">
        <span className="kp-brand-pi">π</span>
        <span className="kp-brand-name">Kevin Park</span>
      </a>
      <nav className="kp-nav">
        <a href="https://app.kevinprk.com" target="_blank" rel="noopener noreferrer" className="kp-nav-link">apps</a>
        <a href="https://note.kevinprk.com" target="_blank" rel="noopener noreferrer" className="kp-nav-link">note</a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="kp-nav-github"
          aria-label="GitHub"
        >
          <GitHubIcon className="kp-github-icon" />
        </a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="kp-footer">
      <span className="kp-footer-pi">π</span>
      <span className="kp-footer-year">{new Date().getFullYear()}</span>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="kp-home">
        <section className="kp-hero">
          <h1 className="kp-hero-name">Kevin Park</h1>
          <div className="kp-hero-rule" />
          <p className="kp-hero-tagline">tools I made for myself.</p>
        </section>

        <section className="kp-section">
          <div className="kp-section-label">apps</div>
          <div className="kp-app-card-grid">
            {FEATURED_APPS.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        </section>

        <section className="kp-section">
          <div className="kp-section-label">note</div>
          {NOTES.map(note => <NoteTeaser key={note.id} note={note} />)}
        </section>
      </main>

      <Footer />
    </div>
  )
}
