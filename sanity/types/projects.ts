import { MultilingualString, MultilingualText, MultilingualArrayString, SanityImage, CallToAction, Slug } from './shared'

export type Skill = {
  _key?: string
  name: string
  highlighted: boolean
}

export type Section = {
  title: MultilingualString
  description: MultilingualText
  list: MultilingualArrayString
}

export type ViewCode = {
  text: MultilingualString
  href?: string
}

export type Project = {
  _id: string
  projectName: MultilingualString
  slug: Slug
  projectImage?: SanityImage
  gallery?: SanityImage[]
  shortDescription: MultilingualText
  skills: Skill[]
  cta?: CallToAction
  viewCode?: ViewCode
  functionalities: Section
  challenges: Section
  projectType: 'website' | 'mobile' | 'web-app' | 'desktop' | 'api'
  status: 'completed' | 'ongoing'
  startDate: string
  endDate?: string
  featured?: boolean
  displayOrder?: number
}