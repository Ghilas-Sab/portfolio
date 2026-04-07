import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const NAV_LINKS = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/contact', labelKey: 'nav.contact' },
] as const

export default function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'text-sm font-medium transition-colors relative',
      isActive
        ? 'text-white after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:rounded-full'
        : 'text-muted hover:text-white',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5">
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white font-bold text-lg tracking-tight hover:text-accent-light transition-colors"
        >
          Sabour<span className="text-accent">.</span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map(({ to, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={linkClass}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {t(labelKey)}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile: language switcher always visible + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded text-muted hover:text-white hover:bg-surface-hover transition-colors"
          >
            {menuOpen ? (
              /* X icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden fixed inset-0 top-14 bg-background z-40 flex flex-col px-6 pt-8 gap-6"
        >
          {NAV_LINKS.map(({ to, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [
                  'text-xl font-semibold py-2 border-b border-white/5 transition-colors',
                  isActive ? 'text-white border-accent' : 'text-muted hover:text-white',
                ].join(' ')
              }
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {t(labelKey)}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
