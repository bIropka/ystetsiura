import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'perk',
  title: 'Perk',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
