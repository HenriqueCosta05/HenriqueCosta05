import { MultilingualString, MultilingualArrayString, PortableTextBlock, MultilingualPortableText, SanityImage, CallToAction, Slug } from './shared'

export type Article = {
  _id: string
  title: MultilingualString
  slug: Slug
  content: MultilingualPortableText
  tags: MultilingualArrayString
  publishedAt: string
  excerpt: MultilingualPortableText
  mainImage?: SanityImage
  cta?: CallToAction
  featured?: boolean
}