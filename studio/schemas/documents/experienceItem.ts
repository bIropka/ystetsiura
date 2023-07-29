import { defineField, defineType, DateRule, StringRule } from 'sanity'

export default defineType({
  name: 'experienceItem',
  title: 'Experience Item',
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
      title: 'Is current position',
      name: 'isCurrent',
      type: 'boolean',
    }),
    defineField({
      title: 'Finish date',
      name: 'finishDate',
      type: 'date',
      options: {
        dateFormat: 'M YYYY',
      },
      hidden: ({ document }) => document?.isCurrent,
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'perksList',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
