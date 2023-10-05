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
    }),
    defineField({
      title: 'Start date',
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      title: 'Finish date',
      name: 'finishDate',
      type: 'date',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
