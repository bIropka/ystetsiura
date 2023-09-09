import { defineType, defineField } from 'sanity'
import defaultSectionFields from '../utils/defaultSectionFields'

export default defineType({
  title: 'Services',
  name: 'servicesObject',
  type: 'object',
  fields: [
    ...defaultSectionFields,
    defineField({
      name: 'list',
      title: 'List',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'service' } }],
    }),
  ],
})
