import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experienceItem',
  title: 'Experience Item',
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
        dateFormat: 'MM, YYYY',
      },
      validation: (Rule) => Rule.required(),
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
        dateFormat: 'MM, YYYY',
      },
      hidden: ({ document }) => !!document?.isCurrent,
    }),
    defineField({
      name: 'type',
      title: 'Employment type',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'perk' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
