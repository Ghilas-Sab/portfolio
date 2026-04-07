import { useMemo } from 'react'
import { projects } from '@/data/projects'
import type { Domain, Project } from '@/types'

type Filter = 'all' | Domain

export function useProjects(filter: Filter): Project[] {
  return useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.domain === filter)
  }, [filter])
}
