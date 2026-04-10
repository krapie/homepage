interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-100 mb-3">{title}</h2>
      {subtitle && <p className="text-slate-400">{subtitle}</p>}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-sky-500 to-violet-500 rounded-full" />
    </div>
  )
}
