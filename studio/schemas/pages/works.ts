import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),
  ],
})
