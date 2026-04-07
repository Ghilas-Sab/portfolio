export type Domain = 'ai' | 'dev'

export interface Project {
  id: string
  titleKey: string
  descriptionKey: string
  period: string
  domain: Domain
  technologies: string[]
}

export interface SkillCategory {
  labelKey: string
  skills: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  license: string
  availabilityKey: string
}
