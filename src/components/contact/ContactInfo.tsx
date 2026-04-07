import { useTranslation } from 'react-i18next'
import { contactInfo } from '@/data/contact'

interface InfoBlockProps {
  label: string
  value: string
  href?: string
}

function InfoBlock({ label, value, href }: InfoBlockProps) {
  return (
    <div className="flex flex-col gap-1 p-5 bg-surface border border-white/8 rounded-xl
      transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 group">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-white font-medium text-base group-hover:text-accent-light transition-colors break-all"
        >
          {value}
        </a>
      ) : (
        <span className="text-white font-medium text-base">{value}</span>
      )}
    </div>
  )
}

export default function ContactInfo() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-8 max-w-xl">
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 self-start">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
        <span className="text-accent-light text-sm font-medium">
          {t('contact.availability')}
        </span>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoBlock
          label={t('contact.email_label')}
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
        />
        <InfoBlock
          label={t('contact.phone_label')}
          value={contactInfo.phone}
          href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
        />
        <InfoBlock
          label={t('contact.location_label')}
          value={contactInfo.location}
        />
        <InfoBlock
          label={t('contact.license_label')}
          value={contactInfo.license}
        />
      </div>
    </div>
  )
}
