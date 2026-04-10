import { motion } from 'framer-motion'

interface BadgeProps {
  label: string
}

export function Badge({ label }: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-sky-500/50 hover:text-sky-400 transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  )
}
