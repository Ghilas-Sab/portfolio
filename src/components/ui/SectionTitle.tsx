import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionTitle({ children, className = '', id }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`text-2xl sm:text-3xl font-bold text-white relative inline-block
        after:absolute after:bottom-[-6px] after:left-0 after:w-10 after:h-[3px]
        after:bg-accent after:rounded-full ${className}`}
    >
      {children}
    </h2>
  )
}
