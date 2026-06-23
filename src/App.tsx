import { useState, useEffect, useRef } from 'react'
import { FEATURED_APPS, NOTES, profile, type AppData, type NoteData } from './data/content'

type View  = 'home' | 'about' | 'apps' | 'notes'
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75V16.5zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
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

function PasteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
  )
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
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

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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
  utility: UtilityIcon,
  paste:   PasteIcon,
  play:    PlayIcon,
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

type Lang = 'en' | 'ko'

function IframeView({ baseSrc, theme, lang, active }: { baseSrc: string; theme: Theme; lang?: Lang; active: boolean }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const langSuffix = lang ? `&lang=${lang}` : ''
  const src = `${baseSrc}&theme=${theme}${langSuffix}`

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage({ type: 'kp-theme', theme }, '*')
  }, [theme])

  useEffect(() => {
    if (lang) iframeRef.current?.contentWindow?.postMessage({ type: 'kp-lang', lang }, '*')
  }, [lang])

  // Append timestamp so the browser treats each activation as a new URL and skips cache.
  useEffect(() => {
    if (active && iframeRef.current) {
      iframeRef.current.src = `${src}&_=${Date.now()}`
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <div className="kp-iframe-view">
      <iframe ref={iframeRef} title="embedded app" />
    </div>
  )
}

// ── Views ────────────────────────────────────────────────────────────────────

function HomeView() {
  return (
    <main className="kp-home">
      <section className="kp-hero">
        <h1 className="kp-hero-name">Kevin Park</h1>
        <div className="kp-hero-rule" />
        <p className="kp-hero-tagline">Apps and notes, for myself.</p>
      </section>

      <section className="kp-section">
        <div className="kp-section-header">
          <div className="kp-section-label">featured apps</div>
          <a href="https://app.kevinprk.com" target="_blank" rel="noopener noreferrer" className="kp-section-more">all apps →</a>
        </div>
        <div className="kp-app-card-grid">
          {FEATURED_APPS.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </section>

      <section className="kp-section">
        <div className="kp-section-header">
          <div className="kp-section-label">featured notes</div>
          <a href="https://note.kevinprk.com" target="_blank" rel="noopener noreferrer" className="kp-section-more">all notes →</a>
        </div>
        {NOTES.map(note => <NoteTeaser key={note.id} note={note} />)}
      </section>
    </main>
  )
}

function AboutView() {
  return (
    <main className="kp-home">
      <section className="kp-hero">
        <h1 className="kp-hero-name">Kevin Park</h1>
        <div className="kp-hero-rule" />
      </section>

      <section className="kp-section">
        <div className="kp-section-header">
          <div className="kp-section-label">intro</div>
        </div>
        <div className="kp-about-intro">
          <p>Hi, I'm Kevin Park 👋</p>
          <p>I'm a cloud support engineer at Amazon Web Services (AWS). And I'm interested in overall infrastructure, architecture, cloud, devops, distributed systems and so on.</p>
          <p>I'm also an open source member of Kubernetes, Istio, Argo, Yorkie and have many other open source activities. And I love to share my knowledge through contributing and mentoring.</p>
        </div>
      </section>

      <section className="kp-section">
        <div className="kp-section-header">
          <div className="kp-section-label">experience</div>
        </div>
        <div className="kp-exp-list">

          <div className="kp-exp-item">
            <div className="kp-exp-meta">
              <span className="kp-exp-period">2024 — present</span>
              <span className="kp-exp-company">Amazon Web Services</span>
            </div>
            <div className="kp-exp-body">
              <div className="kp-exp-role">Cloud Support Engineer</div>
              <p className="kp-exp-desc">Providing technical support to customers specializing in AWS networking services.</p>
            </div>
          </div>

          <div className="kp-exp-item">
            <div className="kp-exp-meta">
              <span className="kp-exp-period">Jun — Aug 2023</span>
              <span className="kp-exp-company">KarrotPay</span>
            </div>
            <div className="kp-exp-body">
              <div className="kp-exp-role">DevOps Engineer</div>
              <p className="kp-exp-desc">Developed internal tools to improve developer productivity and engineering efficiency, as an intern.</p>
            </div>
          </div>

          <div className="kp-exp-item">
            <div className="kp-exp-meta">
              <span className="kp-exp-period">Feb — Jun 2023</span>
              <span className="kp-exp-company">NAVER Corp</span>
            </div>
            <div className="kp-exp-body">
              <div className="kp-exp-role">Software Engineer</div>
              <p className="kp-exp-desc">Designed Sharded Cluster Mode for Yorkie, an open-source document store for collaborative editing applications, as a freelance.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="kp-section">
        <div className="kp-section-header">
          <div className="kp-section-label">elsewhere</div>
        </div>
        <div className="kp-about-links">
          <a className="kp-about-link" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <ExternalIcon />
          </a>
          <a className="kp-about-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ExternalIcon />
          </a>
        </div>
      </section>
    </main>
  )
}

// ── Shell ────────────────────────────────────────────────────────────────────

function Header({
  view, setView, theme, toggleTheme, lang, toggleLang,
}: {
  view: View
  setView: (v: View) => void
  theme: Theme
  toggleTheme: () => void
  lang: Lang
  toggleLang: () => void
}) {
  function navToggle(target: View) {
    setView(view === target ? 'home' : target)
  }
  return (
    <header className="kp-header">
      <button className="kp-brand" onClick={() => setView('home')} aria-label="home">
        <span className="kp-brand-pi">π</span>
        <span className="kp-brand-name">Kevin Park</span>
      </button>
      <nav className="kp-nav">
        <button
          className="kp-nav-link"
          onClick={() => navToggle('apps')}
          style={{ color: view === 'apps' ? 'var(--kp-fg)' : undefined }}
        >apps</button>
        <button
          className="kp-nav-link"
          onClick={() => navToggle('notes')}
          style={{ color: view === 'notes' ? 'var(--kp-fg)' : undefined }}
        >notes</button>
        <button
          className="kp-nav-link"
          onClick={() => navToggle('about')}
          style={{ color: view === 'about' ? 'var(--kp-fg)' : undefined }}
        >about</button>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="kp-nav-github"
          aria-label="GitHub"
        >
          <GitHubIcon className="kp-github-icon" />
        </a>
        {view === 'notes' && (
          <button className="theme-toggle lang-toggle" onClick={toggleLang} aria-label="toggle language">
            {lang === 'en' ? 'KR' : 'EN'}
          </button>
        )}
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
  const [view, setView]   = useState<View>('home')
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const toggleLang  = () => setLang(l => l === 'en' ? 'ko' : 'en')

  const isIframe = view === 'apps' || view === 'notes'

  return (
    <div className="app">
      <Header view={view} setView={setView} theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      {view === 'home'  && <HomeView />}
      {view === 'about' && <AboutView />}
      <div className={view === 'apps' ? 'kp-iframe-slot' : 'kp-iframe-slot-hidden'}>
        <IframeView baseSrc="https://app.kevinprk.com?embed=1" theme={theme} active={view === 'apps'} />
      </div>
      <div className={view === 'notes' ? 'kp-iframe-slot' : 'kp-iframe-slot-hidden'}>
        <IframeView baseSrc="https://note.kevinprk.com?embed=1" theme={theme} lang={lang} active={view === 'notes'} />
      </div>
      {!isIframe && <Footer />}
    </div>
  )
}
