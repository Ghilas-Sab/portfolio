import { useTranslation } from 'react-i18next'
import type { Project } from '@/types'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <Card>
      {/* Header: domain badge + period */}
      <div className="flex items-center justify-between gap-2">
        <Badge
          label={t(`projects.domain_${project.domain}`)}
          variant={project.domain === 'ai' ? 'ai' : 'dev'}
        />
        <span className="text-xs text-muted font-mono shrink-0">{project.period}</span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white leading-snug">
        {t(project.titleKey)}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed flex-1">
        {t(project.descriptionKey)}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/5">
        {project.technologies.map((tech) => (
          <Badge key={tech} label={tech} variant="tech" />
        ))}
      </div>
    </Card>
  )
}
