import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutListItem',
  title: 'About List Item',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
  },
})
