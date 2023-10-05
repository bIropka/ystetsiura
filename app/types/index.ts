import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { EduExpType, PerkType } from '~/types/common'

export type DecorProps = {
  left: number
  width: number
}

export type SocialType = {
  title: string
  icon: SanityImageSource
  url: string
}

export type SlugType = {
  current: string
}

export type NavigationListType = 'mobile' | 'desktop'

export type NavigationItemType = {
  title: string
  slug: SlugType
}

export type PersonalDataType = {
  logoText: string
  firstName: string
  lastName: string
  birthday: string
  email: string
  location: string
  phone: string
  headerImage: SanityImageSource
  image: SanityImageSource
  imageSecond: SanityImageSource
  position: string[]
  socialList: SocialType[]
  navs: NavigationItemType[]
}

export type ClientType = {
  title: string
  image: SanityImageSource
}

export type CustomLinkType = {
  title: string
  url: string
}

export type ProjectCategoryType = {
  title: string
}

export type PostCategoryType = {
  title: string
}

export type AuthorType = {
  name: string
  image: SanityImageSource
  bio: any[]
}

export type ProjectType = {
  image: SanityImageSource
  title: string
  category?: ProjectCategoryType[]
  links?: CustomLinkType[]
  projectStartYear: string
  projectEndYear?: string
  perks?: PerkType[]
  role: string
  description: any[]
}

export type PostType = {
  title: string
  slug: SlugType
  description: string
  author: AuthorType
  mainImage: SanityImageSource
  categories?: PostCategoryType[]
  publishedAt: string
  body: any[]
}

export type ResumeDataType = {
  title: string
  edu?: EduExpType[]
  exp?: EduExpType[]
  perks?: PerkType[]
}

export type WorksDataType = {
  title: string
  projects?: ProjectType[]
}

export type BlogDataType = {
  title: string
  posts?: PostType[]
}

export type ContactFormDataType = {
  fullname: string
  email: string
  message: string
}
