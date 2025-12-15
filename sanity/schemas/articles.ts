import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'pt', title: 'Portuguese', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en', maxLength: 96 },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'pt', title: 'Portuguese', type: 'string' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'block' }] },
        { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'object',
      fields: [
        { name: 'en', title: 'English Tags', type: 'array', of: [{ type: 'string' }] },
        { name: 'es', title: 'Spanish Tags', type: 'array', of: [{ type: 'string' }] },
        { name: 'pt', title: 'Portuguese Tags', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'es', title: 'Spanish', type: 'string' },
            { name: 'pt', title: 'Portuguese', type: 'string' },
          ],
        },
        {
          name: 'linkUrl',
          title: 'Link URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'object',
          description: 'Override the default title (recommended: 50-60 characters)',
          fields: [
            { name: 'en', title: 'English', type: 'string', validation: (Rule: any) => Rule.max(60) },
            { name: 'es', title: 'Spanish', type: 'string', validation: (Rule: any) => Rule.max(60) },
            { name: 'pt', title: 'Portuguese', type: 'string', validation: (Rule: any) => Rule.max(60) },
          ],
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'object',
          description: 'SEO description (recommended: 150-160 characters)',
          fields: [
            { name: 'en', title: 'English', type: 'text', validation: (Rule: any) => Rule.max(160) },
            { name: 'es', title: 'Spanish', type: 'text', validation: (Rule: any) => Rule.max(160) },
            { name: 'pt', title: 'Portuguese', type: 'text', validation: (Rule: any) => Rule.max(160) },
          ],
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'SEO keywords for this article',
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: { hotspot: true },
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Canonical URL if this article was published elsewhere first',
        },
      ],
    }),
  ],
})
