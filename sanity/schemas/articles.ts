import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: '_id',
      title: 'ID',
      type: 'string',
      hidden: true,
    }),
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'block' }] },
        { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'block' }] },
      ],
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
  ],
})