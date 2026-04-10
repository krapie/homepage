import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export function Card({ children, className = '', href }: CardProps) {
  const base = `rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
        className={`${base} block cursor-pointer hover:border-sky-500/50 hover:bg-slate-800 transition-colors duration-300`}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2 }}
      className={base}
    >
      {children}
    </motion.div>
  )
}
