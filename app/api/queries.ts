import sanityClient from '~/api/sanity-client'
import { PersonalDataType } from '~/types'

export const getPersonalData = async (): Promise<PersonalDataType> =>
  await sanityClient.fetch(
    `*[_type == "personalData"][0]{..., socialList[]->, "photo": photo.asset->url}`
  )
