import { useTranslation } from 'react-i18next'
import Button from '@/components/ui/Button'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 animate-fade-in"
      aria-labelledby="hero-name"
    >
      {/* Availability badge */}
      <span className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
        {t('hero.availability')}
      </span>

      {/* Name — H1 unique */}
      <h1
        id="hero-name"
        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4"
      >
        Sabour{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
          Ghilas
        </span>
      </h1>

      {/* Title */}
      <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-4 font-medium">
        {t('hero.title')}
      </p>

      {/* Tagline */}
      <p className="text-base text-gray-500 max-w-lg mb-10">
        {t('hero.tagline')}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button to="/projects" variant="primary">
          {t('hero.cta_projects')}
        </Button>
        <Button to="/contact" variant="ghost">
          {t('hero.cta_contact')}
        </Button>
      </div>

      {/* Scroll hint — decorative, hidden on small screens to avoid overlap */}
      <div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-600 text-xs"
        aria-hidden="true"
      >
        <span>{t('hero.scrollHint')}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="animate-bounce"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
          />
        </svg>
      </div>
    </section>
  )
}
