import { defineType, defineField } from 'sanity'

const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'role',
      title: 'Your Role',
      type: 'string',
    }),
    defineField({
      name: 'employer',
      title: 'Employer / Client',
      type: 'string',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Case Study Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            {
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [{ type: 'block' }, { type: 'image' }],
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
            {
              name: 'stats',
              title: 'Stats / Metrics',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'value', title: 'Value', type: 'string' },
                    { name: 'label', title: 'Label', type: 'string' },
                  ],
                },
              ],
            },
            {
              name: 'subsections',
              title: 'Subsections',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'title', title: 'Title', type: 'string' },
                    {
                      name: 'body',
                      title: 'Body',
                      type: 'array',
                      of: [{ type: 'block' }, { type: 'image' }],
                    },
                    {
                      name: 'images',
                      title: 'Images',
                      type: 'array',
                      of: [{ type: 'image' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Feature Showcase',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Feature Title', type: 'string' },
            {
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [{ type: 'block' }, { type: 'image' }],
            },
            {
              name: 'stats',
              title: 'Stats',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'value', title: 'Value', type: 'string' },
                    { name: 'label', title: 'Label', type: 'string' },
                  ],
                },
              ],
            },
            {
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{ type: 'image' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', title: 'Metric', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'reflections',
      title: 'Impact & Reflections',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured on homepage',
      type: 'boolean',
    }),
    defineField({
      name: 'isProtected',
      title: 'Password Protected (NDA)',
      type: 'boolean',
    }),
  ],
})

export const schemaTypes = [caseStudy]