import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Experience List',
  name: 'experienceList',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'experienceItem',
    }),
  ],
})
