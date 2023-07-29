import { defineField, defineType, StringRule } from 'sanity'

export default defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'servicesList',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'testimonialsList',
    }),
  ],
})
