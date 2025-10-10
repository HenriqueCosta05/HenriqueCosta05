import { MultilingualString, MultilingualArrayString, MultilingualPortableText, SanityImage, CallToAction, Slug } from './shared'

export type Education = {
  _id: string
  institution: MultilingualString
  slug: Slug
  degree: MultilingualString
  fieldOfStudy?: MultilingualString
  description?: MultilingualPortableText
  honors?: MultilingualArrayString
  startDate: string
  endDate?: string
  institutionLogo?: SanityImage
  cta?: CallToAction
  featured?: boolean
  displayOrder?: number
}
