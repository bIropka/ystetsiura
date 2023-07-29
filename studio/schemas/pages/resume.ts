import { defineField, defineType, StringRule } from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: 'edu',
      title: 'Education',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'educationItem' } }],
    }),
    defineField({
      name: 'exp',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'experienceItem' } }],
    }),
  ],
})
