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
    <div
      className="flex items-center gap-2 flex-wrap"
      role="group"
      aria-label={t('projects.filterLabel')}
    >
      {filters.map(({ value, labelKey }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          aria-pressed={activeFilter === value}
          className={[
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px]',
            activeFilter === value
              ? 'bg-accent text-white shadow-md shadow-accent/20'
              : 'bg-surface border border-white/10 text-gray-400 hover:text-white hover:border-white/30',
          ].join(' ')}
        >
          {t(labelKey)}
        </button>
      ))}
    </div>
  )
}
