import { useTranslation } from 'react-i18next'
import type { Domain } from '@/types'

type Filter = 'all' | Domain

interface ProjectFilterProps {
  activeFilter: Filter
  onFilterChange: (filter: Filter) => void
}

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  const { t } = useTranslation()

  const filters: { value: Filter; labelKey: string }[] = [
    { value: 'all', labelKey: 'projects.filter_all' },
    { value: 'ai', labelKey: 'projects.filter_ai' },
    { value: 'dev', labelKey: 'projects.filter_dev' },
  ]

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Filtrer les projets">
      {filters.map(({ value, labelKey }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          aria-pressed={activeFilter === value}
          className={[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
            activeFilter === value
              ? 'bg-accent text-white shadow-md shadow-accent/20'
              : 'bg-surface border border-white/10 text-muted hover:text-white hover:border-white/30',
          ].join(' ')}
        >
          {t(labelKey)}
        </button>
      ))}
    </div>
  )
}
