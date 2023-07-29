import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Education List',
  name: 'educationList',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'educationItem',
    }),
  ],
})
