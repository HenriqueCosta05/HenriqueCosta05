import { CallToAction, MultilingualArrayString, MultilingualPortableText, MultilingualString, SanityImage, Slug } from './shared'

export type ArticleSEO = {
  metaTitle?: MultilingualString
  metaDescription?: MultilingualString
  keywords?: string[]
  ogImage?: SanityImage
  canonicalUrl?: string
}

export type Article = {
  _id: string
  title: MultilingualString
  slug: Slug
  shortDescription: MultilingualString
  content: MultilingualPortableText
  tags: MultilingualArrayString
  publishedAt: string
  excerpt: MultilingualPortableText
  mainImage?: SanityImage
  cta?: CallToAction
  featured?: boolean
  seo?: ArticleSEO
}
