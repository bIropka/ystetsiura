import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'educationItem',
  title: 'Education Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Start date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Finish date',
      name: 'finishDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
