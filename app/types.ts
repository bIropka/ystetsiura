import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type SocialType = {
  title: string
  url: string
}

export type PersonalDataType = {
  firstName: string
  lastName: string
  birthday: string
  email: string
  location: string
  phone: string
  headerImage: SanityImageSource
  image: SanityImageSource
  position: string
  socialList: SocialType[]
}

export type ServiceType = {
  title: string
  text?: string
}

export type TestimonialType = {
  image?: SanityImageSource
  name: string
  company?: string
  project?: string
  url?: string
  position?: string
  text: string
}

export type ClientType = {
  title: string
  image: SanityImageSource
}

export type PerkType = {
  title: string
}

export type EduExpType = {
  title: string
  startDate: string
  isCurrent?: boolean
  finishDate?: string
  type?: 'Full-time' | 'Part-time'
  position?: string
  text?: string
  perks?: PerkType[]
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
  slug: string
  description: string
  author: AuthorType
  mainImage: SanityImageSource
  categories?: PostCategoryType[]
  publishedAt: string
  body: any[]
}

export type AboutMeDataType = {
  title: string
  bio: any[]
  services?: ServiceType[]
  testimonials?: TestimonialType[]
  clients?: ClientType[]
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

export type ContactFormDataType = {
  fullname: string
  email: string
  message: string
}
