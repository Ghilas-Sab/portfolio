import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <p className="text-8xl font-bold text-accent/30" aria-hidden="true">404</p>
      <h1 className="text-3xl font-bold text-white">{t('notFound.title')}</h1>
      <p className="text-gray-400 max-w-sm">{t('notFound.message')}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white
          text-sm font-semibold hover:bg-accent-light transition-colors min-h-[44px]"
      >
        {t('notFound.back')}
      </Link>
    </div>
  )
}
