import { defineType, defineField } from 'sanity'
import defaultSectionFields from '../utils/defaultSectionFields'

export default defineType({
  title: 'About Me',
  name: 'aboutMeObject',
  type: 'object',
  fields: [
    ...defaultSectionFields,
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContentObject',
    }),
    defineField({
      name: 'list',
      title: 'List',
      type: 'array',
      of: [{ type: 'aboutListItem' }],
    }),
  ],
})
