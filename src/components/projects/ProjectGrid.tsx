import { useState } from 'react'
import type { Domain } from '@/types'
import { useProjects } from '@/hooks/useProjects'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'

type Filter = 'all' | Domain

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const filtered = useProjects(activeFilter)

  return (
    <div className="flex flex-col gap-8">
      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        aria-live="polite"
        aria-label="Liste des projets"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
