import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'personalData',
  title: 'Personal Data',
  type: 'document',
  fields: [
    defineField({
      name: 'navs',
      title: 'Navigation list',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'navigation' } }],
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageSecond',
      title: 'Photo Second',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoText',
      title: 'logo Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'socialList',
      title: 'Social list',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required() && Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'birthday',
      title: 'Birthday',
      type: 'date',
      options: {
        dateFormat: 'D, MMMM, YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
