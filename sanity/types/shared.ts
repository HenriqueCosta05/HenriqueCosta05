// Shared types across all Sanity schemas

export type MultilingualString = {
  en: string
  es: string
  pt: string
}

export type MultilingualText = {
  en: string
  es: string
  pt: string
}

export type MultilingualArrayString = {
  en: string[]
  es: string[]
  pt: string[]
}

export type PortableTextBlock = {
  _key: string
  _type: 'block'
  children: Array<{
    _key: string
    _type: 'span'
    marks: string[]
    text: string
  }>
  markDefs: any[]
  style: string
}

export type MultilingualPortableText = {
  en: PortableTextBlock[]
  es: PortableTextBlock[]
  pt: PortableTextBlock[]
}

export type SanityImage = {
  asset: {
    _id: string
    url: string
  }
}

export type CallToAction = {
  text: MultilingualString
  linkUrl?: string
}

export type Slug = {
  current: string
  _type: 'slug'
}
