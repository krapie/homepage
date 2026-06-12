import { useState, useEffect } from 'react'
import { ALL_APPS, NOTES, profile, type AppData, type NoteData } from './data/content'

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

function UtilityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  )
}

function SlideIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75zM12 16.5v2.25M9 21h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9h4.5M7.5 12h9" />
    </svg>
  )
}

function PasteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
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

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

const APP_ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  karaoke: KaraokeIcon,
  plumber: PlumberIcon,
  utility: UtilityIcon,
  slide:   SlideIcon,
  paste:   PasteIcon,
  tiny:    TinyIcon,
  play:    PlayIcon,
}

// ── Shared components ────────────────────────────────────────────────────────

function AppRow({ app }: { app: AppData }) {
  const Icon = APP_ICONS[app.id]
  return (
    <a href={app.url} target="_blank" rel="noopener noreferrer" className="kp-app-row">
      <div className="ar-icon">
        {Icon && <Icon className="ar-icon-svg" />}
      </div>
      <div className="ar-body">
        <span className="ar-name">{app.name}</span>
        <span className="ar-desc">{app.desc}</span>
      </div>
      <span className="ar-arrow">→</span>
    </a>
  )
}

function NoteRow({ note }: { note: NoteData }) {
  return (
    <a
      href={`https://notes.kevinprk.com/${note.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="note-row"
    >
      <span className="note-row-main">
        <span className="note-row-title">{note.title}</span>
        <span className="note-row-blurb">{note.blurb}</span>
        <span className="note-row-tags">
          {note.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </span>
      </span>
      <span className="note-row-meta">
        <span className="mono-dim">{note.date}</span>
        <span className="mono-dim">{note.read} read</span>
      </span>
    </a>
  )
}

// ── Shell ────────────────────────────────────────────────────────────────────

function Header({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  return (
    <header className="kp-header">
      <a href="#" className="kp-brand" aria-label="home">
        <span className="kp-brand-pi">π</span>
        <span className="kp-brand-name">Kevin Park</span>
      </a>
      <nav className="kp-nav">
        <a href="#apps" className="kp-nav-link">apps</a>
        <a href="#notes" className="kp-nav-link">notes</a>
        <a href="#about" className="kp-nav-link">about</a>
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

        <section className="kp-section" id="apps">
          <div className="kp-section-label">apps</div>
          <div role="list">
            {ALL_APPS.map(app => <AppRow key={app.id} app={app} />)}
          </div>
        </section>

        <section className="kp-section" id="notes">
          <div className="kp-section-label">notes</div>
          <div className="kp-list">
            {NOTES.map(note => <NoteRow key={note.id} note={note} />)}
          </div>
        </section>

        <section className="kp-section" id="about">
          <div className="kp-section-label">about</div>
          <article className="about">
            <header className="about-head">
              <span className="about-pi">π</span>
              <h2>Kevin Park</h2>
              <p className="about-lede">
                Cloud support engineer at AWS. I like systems — how they break,
                why they scale, what the packets are actually doing.
              </p>
            </header>

            <section className="about-block">
              <p>
                I focus on infrastructure, cloud architecture, DevOps, and distributed
                systems. The apps and notes here are where that work spills over into
                things worth sharing — mostly things I wanted that didn't quite exist.
              </p>
              <p>
                I contribute to open source projects including Kubernetes, Istio, Argo,
                and Yorkie, and enjoy mentoring and sharing through the community.
              </p>
            </section>

            <section className="about-block">
              <h3 className="about-h2">Elsewhere</h3>
              <div className="about-links">
                <a className="about-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ExternalIcon />
                </a>
                <a className="about-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ExternalIcon />
                </a>
              </div>
            </section>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
