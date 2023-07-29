import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Clients List',
  name: 'clientsList',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'client',
    }),
  ],
})
