import { MultilingualString, MultilingualArrayString, MultilingualPortableText, SanityImage, CallToAction, Slug } from './shared'

export type Experience = {
  _id: string
  company: MultilingualString
  slug: Slug
  position: MultilingualString
  location: MultilingualString
  description: MultilingualPortableText
  achievements: MultilingualArrayString
  technologies: MultilingualArrayString
  companyLogo?: SanityImage
  companyWebsite?: string
  employmentType: MultilingualString
  startDate: string
  endDate?: string
  cta?: CallToAction
  featured?: boolean
  displayOrder?: number
}