import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <main className="min-h-screen bg-background text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{t('notFound.title')}</h1>
      <p className="text-muted">{t('notFound.message')}</p>
      <Link to="/" className="text-accent hover:text-accent-light underline">
        {t('notFound.back')}
      </Link>
    </main>
  )
}
