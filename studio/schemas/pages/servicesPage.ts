import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionServices',
      title: 'Services',
      type: 'servicesObject',
      options: {
        collapsed: true,
      },
    }),
  ],
})
