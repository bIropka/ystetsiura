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

export type AboutMeDataType = {
  title: string
  bio: []
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

export type ContactFormDataType = {
  fullname: string
  email: string
  message: string
}

export type ProjectCategoryType = {
  title: string
}

export type ProjectType = {
  image: SanityImageSource
  title: string
  category: ProjectCategoryType[]
  perks: PerkType[]
  role: string
  description: string
}
