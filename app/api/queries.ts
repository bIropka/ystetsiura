import sanityClient from '~/api/sanity-client'
import { type AboutMeDataType } from '~/types/about-me'
import {
  BlogDataType,
  PersonalDataType,
  PostType,
  WorksDataType,
  ProjectCategoryType,
} from '~/types'

export const getPersonalData = async (): Promise<PersonalDataType> =>
  await sanityClient.fetch(`*[_type == "personalData"][0]{..., socialList[]->, navs[]->}`)

export const getAboutMeData = async (): Promise<AboutMeDataType> =>
  await sanityClient.fetch(
    `*[_type == "aboutMePage"][0]{..., sectionEducation{..., list[]->}, sectionExperience{..., list[]->}, sectionLanguages{..., list[]->}, sectionPerks{..., list[]->{..., perk->}}, sectionServices{..., list[]->}, sectionTestimonials{..., list[]->}}`
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

export const getProjectCategoriesData = async (): Promise<ProjectCategoryType[]> =>
  await sanityClient.fetch(`*[_type == "projectCategory"]`)
