import { defineType, defineField } from 'sanity'
import defaultSectionFields from '../utils/defaultSectionFields'

export default defineType({
  title: 'About Me',
  name: 'aboutMeListObject',
  type: 'object',
  fields: [
    ...defaultSectionFields,
    defineField({
      name: 'list',
      title: 'List',
      type: 'array',
      of: [{ type: 'aboutListItem' }],
    }),
  ],
})
