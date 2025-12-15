import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: '_id',
      title: 'ID',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'projectName',
      title: 'Project Name',
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
      options: { source: 'projectName.en', maxLength: 96 },
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'es', title: 'Spanish', type: 'text' },
        { name: 'pt', title: 'Portuguese', type: 'text' },
      ],
    }),
    defineField({
      name: 'skills',
      title: 'Skills/Technologies',
      type: 'array',
      of: [
        defineField({
          name: 'skill',
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Skill Name' },
            { name: 'highlighted', type: 'boolean', title: 'Highlighted' },
          ],
        }),
      ],
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
      name: 'viewCode',
      title: 'View Source Code',
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
          name: 'href',
          title: 'Repository URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'functionalities',
      title: 'Functionalities',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'es', title: 'Spanish', type: 'string' },
            { name: 'pt', title: 'Portuguese', type: 'string' },
          ],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'text' },
            { name: 'es', title: 'Spanish', type: 'text' },
            { name: 'pt', title: 'Portuguese', type: 'text' },
          ],
        },
        {
          name: 'list',
          title: 'Features List',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] },
            { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'string' }] },
            { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'string' },
            { name: 'es', title: 'Spanish', type: 'string' },
            { name: 'pt', title: 'Portuguese', type: 'string' },
          ],
        },
        {
          name: 'description',
          title: 'Description',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'text' },
            { name: 'es', title: 'Spanish', type: 'text' },
            { name: 'pt', title: 'Portuguese', type: 'text' },
          ],
        },
        {
          name: 'list',
          title: 'Challenges List',
          type: 'object',
          fields: [
            { name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] },
            { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'string' }] },
            { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Mobile Application', value: 'mobile' },
          { title: 'Web Application', value: 'web-app' },
          { title: 'Desktop Application', value: 'desktop' },
          { title: 'API', value: 'api' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'completed' },
          { title: 'Ongoing', value: 'ongoing' },
        ],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty for ongoing projects',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
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
          description: 'SEO keywords for this project',
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})
