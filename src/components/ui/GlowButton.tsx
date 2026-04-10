import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'ghost'
}

export function GlowButton({ children, href, variant = 'primary' }: GlowButtonProps) {
  const primary = 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/50'
  const ghost = 'border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white'

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${variant === 'primary' ? primary : ghost}`}
    >
      {children}
    </motion.a>
  )
}
