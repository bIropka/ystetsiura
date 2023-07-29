import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Testimonials List',
  name: 'testimonialsList',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'testimonial',
    }),
  ],
})
