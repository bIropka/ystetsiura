import { defineField, defineType, ImageRule, StringRule } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: ImageRule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'projectCategory' } }],
    }),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'perk' } }],
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: StringRule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: StringRule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
    },
  },
})
