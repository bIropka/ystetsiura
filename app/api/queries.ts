import sanityClient from '~/api/sanity-client'

export const getPersonalData = async () =>
  await sanityClient.fetch(
    `*[_type == "personalData"][0]{..., socialList[]->, "photo": photo.asset->url}`
  )
