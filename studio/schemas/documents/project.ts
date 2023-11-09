import { defineField, defineType } from 'sanity'

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
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Project start year',
      name: 'projectStartYear',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    }),
    defineField({
      title: 'Project end year',
      name: 'projectEndYear',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'projectCategory' } }],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'customOuterLink' } }],
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
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContentObject',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
    },
  },
})
