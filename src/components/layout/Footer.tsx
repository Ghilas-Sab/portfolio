import { useTranslation } from 'react-i18next'
import { contactInfo } from '@/data/contact'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-white/5 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © 2026 Sabour Ghilas — {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-white transition-colors"
          >
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="hover:text-white transition-colors"
          >
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
