import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Services List',
  name: 'servicesList',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'service',
    }),
  ],
})
