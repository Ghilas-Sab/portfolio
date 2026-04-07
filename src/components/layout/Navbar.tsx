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

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'text-sm font-medium transition-colors relative py-1',
      isActive
        ? 'text-white after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:rounded-full'
        : 'text-gray-400 hover:text-white',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5">
      {/* Skip to content — keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50
          focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        {t('a11y.skipToContent')}
      </a>

      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between"
        aria-label={t('nav.ariaLabel')}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="text-white font-bold text-lg tracking-tight hover:text-accent-light transition-colors"
          aria-label="Sabour Ghilas — Accueil"
        >
          Sabour<span className="text-accent" aria-hidden="true">.</span>
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

        {/* Mobile: language switcher + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-surface-hover transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              </svg>
            ) : (
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
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.ariaLabel')}
          className="sm:hidden fixed inset-0 top-14 bg-background z-40 flex flex-col px-6 pt-8 gap-2"
        >
          {NAV_LINKS.map(({ to, labelKey }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [
                  'text-xl font-semibold py-4 border-b border-white/5 transition-colors min-h-[44px] flex items-center',
                  isActive ? 'text-white border-accent/50' : 'text-gray-400 hover:text-white',
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
