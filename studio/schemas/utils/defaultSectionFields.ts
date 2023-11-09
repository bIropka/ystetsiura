import { defineField } from 'sanity'

const defaultSectionFields = [
  defineField({
    name: 'enabled',
    title: 'Enabled',
    type: 'boolean',
  }),
  defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
  }),
]

export default defaultSectionFields
