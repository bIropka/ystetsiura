import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import sanityClient from '~/api/sanity-client'

const builder = imageUrlBuilder(sanityClient)

const sanityImageBuilder = (source: SanityImageSource) => builder.image(source)

export default sanityImageBuilder
