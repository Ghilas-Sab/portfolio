import { useTranslation } from 'react-i18next'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactInfo from '@/components/contact/ContactInfo'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
      aria-labelledby="contact-title"
    >
      <SectionTitle className="mb-4" id="contact-title">
        {t('contact.title')}
      </SectionTitle>

      <p className="text-muted text-base mb-12 mt-6">
        {t('contact.subtitle')}
      </p>

      <ContactInfo />
    </section>
  )
}
