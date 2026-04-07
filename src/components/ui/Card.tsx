import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-surface border border-white/8 rounded-xl p-5 flex flex-col gap-4
        transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5
        ${className}`}
    >
      {children}
    </div>
  )
}
