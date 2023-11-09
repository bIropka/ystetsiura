import { defineStore } from 'pinia'
import {
  getAboutMeData,
  getPersonalData,
  getProjectCategoriesData,
  getWorksData,
} from '~/api/queries'
import { PersonalDataType, PostCategoryType, WorksDataType } from '~/types'
import { AboutMeDataType } from '~/types/about-me'

export const useStore = defineStore('pages', () => {
  const personal = ref<PersonalDataType | null>(null)
  const aboutMePage = ref<AboutMeDataType | null>(null)
  const portfolioPage = ref<WorksDataType | null>(null)
  const categories = ref<PostCategoryType[] | null>(null)

  const init = () => {
    const { data: personalData } = useAsyncData('personal-data', getPersonalData)
    const { data: aboutMePageData } = useAsyncData('about-me-data', getAboutMeData)
    const { data: portfolioPageData } = useAsyncData('projects-data', getWorksData)
    const { data: categoriesData } = useAsyncData(
      'project-categories-data',
      getProjectCategoriesData
    )
    personal.value = personalData.value
    aboutMePage.value = aboutMePageData.value
    portfolioPage.value = portfolioPageData.value
    categories.value = categoriesData.value
  }
  return { personal, aboutMePage, portfolioPage, categories, init }
})
