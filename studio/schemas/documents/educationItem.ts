import { defineField, defineType, DateRule, StringRule } from 'sanity'

export default defineType({
  name: 'educationItem',
  title: 'Education Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      title: 'Start date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'M YYYY',
      },
      validation: (Rule: DateRule) => Rule.required(),
    }),
    defineField({
      title: 'Finish date',
      name: 'finishDate',
      type: 'date',
      options: {
        dateFormat: 'M YYYY',
      },
      validation: (Rule: DateRule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule: StringRule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
