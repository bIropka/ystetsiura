import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blogPage',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    }),
  ],
})
