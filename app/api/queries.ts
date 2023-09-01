import sanityClient from '~/api/sanity-client'
import {
  AboutMeDataType,
  BlogDataType,
  ResumeDataType,
  PersonalDataType,
  PostType,
  WorksDataType,
} from '~/types'

export const getPersonalData = async (): Promise<PersonalDataType> =>
  await sanityClient.fetch(`*[_type == "personalData"][0]{..., socialList[]->, navs[]->}`)

export const getAboutMeData = async (): Promise<AboutMeDataType> =>
  await sanityClient.fetch(
    `*[_type == "aboutMe"][0]{..., services[]->, testimonials[]->, clients[]->}`
  )

export const getResumeData = async (): Promise<ResumeDataType> =>
  await sanityClient.fetch(
    `*[_type == "resume"][0]{..., edu[]->{..., perks[]->}, exp[]->{..., perks[]->}}`
  )

export const getWorksData = async (): Promise<WorksDataType> =>
  await sanityClient.fetch(
    `*[_type == "works"][0]{..., projects[]->{..., category[]->, links[]->, perks[]->}}`
  )

export const getBlogData = async (): Promise<BlogDataType> =>
  await sanityClient.fetch(`*[_type == "blog"][0]{..., posts[]->{..., author->, categories[]->}}`)

export const getPostData = async (slug: string): Promise<PostType> =>
  await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}"][0]{..., author->, categories[]->}`
  )
