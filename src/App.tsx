import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './components/ui/Icons'
import { profile } from './data/content'

const links = [
  {
    label: 'GitHub',
    handle: 'github.com/krapie',
    href: profile.github,
    icon: GithubIcon,
    iconColor: '#cbd5e1',
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/krapie',
    href: profile.linkedin,
    icon: LinkedinIcon,
    iconColor: '#38bdf8',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f1f5f9',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-8rem', left: '-8rem',
          width: '28rem', height: '28rem', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-8rem', right: '-8rem',
          width: '28rem', height: '28rem', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        }} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '32rem', textAlign: 'center' }}
      >
        {/* Name */}
        <motion.h1
          variants={item}
          style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {profile.name}
        </motion.h1>

        {/* Link cards */}
        <div className="link-grid">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.03, y: -4 }}
                style={{
                  display: 'block',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(51,65,85,0.7)',
                  background: 'rgba(15,23,42,0.6)',
                  backdropFilter: 'blur(12px)',
                  textDecoration: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ color: link.iconColor }}>
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight size={15} style={{ color: '#475569' }} />
                </div>
                <div style={{ fontWeight: 700, color: '#f1f5f9', fontSize: '1rem', marginBottom: '0.25rem' }}>
                  {link.label}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>
                  {link.handle}
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
