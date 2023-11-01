import { defineStore } from 'pinia'
import {
  getAboutMeData,
  getBlogData,
  getPersonalData,
  getResumeData,
  getWorksData,
} from '~/api/queries'

export const usePersonalDataStore = defineStore('personalData', () => {
  const { data } = useAsyncData('personal-data', getPersonalData)
  return { data }
})

export const useAboutMePageStore = defineStore('aboutMePage', () => {
  const { data } = useAsyncData('about-me-data', getAboutMeData)
  return { data }
})

export const usePortfolioPageStore = defineStore('portfolioPage', () => {
  const { data } = useAsyncData('projects-data', getWorksData)
  return { data }
})

export const useServicesPageStore = defineStore('servicesPage', () => {
  const { data } = useAsyncData('resume-data', getResumeData)
  return { data }
})

export const useBlogPageStore = defineStore('blogPage', () => {
  const { data } = useAsyncData('blog-data', getBlogData)
  return { data }
})
