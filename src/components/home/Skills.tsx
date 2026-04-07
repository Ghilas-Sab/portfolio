import { useTranslation } from 'react-i18next'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20 border-t border-white/5"
      aria-labelledby="skills-title"
    >
      <SectionTitle className="mb-12" id="skills-title">
        {t('skills.title')}
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.labelKey}>
            <h3 className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              {t(category.labelKey)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} label={skill} variant="tech" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
