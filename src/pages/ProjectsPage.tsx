import { useTranslation } from 'react-i18next'
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
      aria-labelledby="projects-title"
    >
      <SectionTitle className="mb-12" id="projects-title">
        {t('projects.title')}
      </SectionTitle>
      <ProjectGrid />
    </section>
  )
}
