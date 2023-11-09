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
      name: 'exp',
      title: 'Work experience',
      type: 'number',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
    }),
    defineField({
      name: 'percents',
      title: 'Percents',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'level',
    },
  },
})
