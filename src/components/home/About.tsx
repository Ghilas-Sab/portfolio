import { useTranslation } from 'react-i18next'
import SectionTitle from '@/components/ui/SectionTitle'

export default function About() {
  const { t } = useTranslation()

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      aria-labelledby="about-title"
    >
      <SectionTitle className="mb-10" id="about-title">
        {t('about.title')}
      </SectionTitle>

      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
        {t('about.body')}
      </p>
    </section>
  )
}
