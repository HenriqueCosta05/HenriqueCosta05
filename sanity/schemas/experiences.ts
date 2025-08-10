import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: '_id',
      title: 'ID',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'company',
      title: 'Company',
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
      options: { source: 'company.en', maxLength: 96 },
    }),
    defineField({
      name: 'position',
      title: 'Role/Position',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'pt', title: 'Portuguese', type: 'string' },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'pt', title: 'Portuguese', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'block' }] },
        { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'string' }] },
        { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies/Skills',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'string' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'string' }] },
        { name: 'pt', title: 'Portuguese', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'companyWebsite',
      title: 'Company Website',
      type: 'url',
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Internship', value: 'internship' },
          { title: 'Freelance', value: 'freelance' },
          { title: 'Contract', value: 'contract' },
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
      description: 'Leave empty for ongoing experiences',
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
      title: 'Featured Experience',
      type: 'boolean',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
})