import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutMePage',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionAboutMe',
      title: 'About Me',
      type: 'aboutMeObject',
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: 'sectionServices',
      title: 'Services',
      type: 'servicesObject',
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: 'sectionPerks',
      title: 'Perks',
      type: 'perksObject',
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: 'sectionLanguages',
      title: 'Languages',
      type: 'perksObject',
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: 'sectionEducation',
      title: 'Education',
      type: 'educationObject',
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: 'sectionExperience',
      title: 'Experience',
      type: 'experienceObject',
      options: {
        collapsed: true,
      },
    }),
    defineField({
      name: 'sectionTestimonials',
      title: 'Testimonials',
      type: 'testimonialsObject',
      options: {
        collapsed: true,
      },
    }),
  ],
})
