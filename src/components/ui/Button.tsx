import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  to?: string
  onClick?: () => void
  className?: string
}

const base =
  'inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 min-w-[44px] min-h-[44px]'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 active:scale-95',
  ghost:
    'border border-white/15 text-gray-300 hover:border-white/40 hover:text-white active:scale-95',
}

export default function Button({ children, variant = 'primary', to, onClick, className = '' }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
