import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Perks List',
  name: 'perksList',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'perk',
    }),
  ],
})
