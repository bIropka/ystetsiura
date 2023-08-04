import { createClient } from '@sanity/client'

const {
  VITE_SANITY_PROJECT_ID = '',
  VITE_SANITY_DATASET = '',
  VITE_SANITY_API_VERSION = '',
  VITE_SANITY_API_TOKEN = '',
} = import.meta.env

const sanityClient = createClient({
  projectId: VITE_SANITY_PROJECT_ID,
  dataset: VITE_SANITY_DATASET,
  apiVersion: VITE_SANITY_API_VERSION,
  token: VITE_SANITY_API_TOKEN,
  useCdn: true,
})

export default sanityClient
