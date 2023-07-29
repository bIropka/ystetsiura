import { defineField, defineType, ImageRule, StringRule } from 'sanity'

export default defineType({
  name: 'perk',
  title: 'Perk',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'iconPicker',
      options: {
        providers: ['f7', 'fa', 'mdi', 'sa', 'hi', 'fi', 'si'],
        validation: (Rule: StringRule) => Rule.required(),
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
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
