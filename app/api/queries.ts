import sanityClient from '~/api/sanity-client'
import { AboutMeDataType, PersonalDataType } from '~/types'

export const getPersonalData = async (): Promise<PersonalDataType> =>
  await sanityClient.fetch(`*[_type == "personalData"][0]{..., socialList[]->}`)

export const getAboutMeData = async (): Promise<AboutMeDataType> =>
  await sanityClient.fetch(
    `*[_type == "aboutMe"][0]{..., services[]->, testimonials[]->, clients[]->}`
  )
