import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export enum ExpLevel {
  BEGINNER = 'Beginner',
  MEDIUM = 'Medium',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert',
}

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
  level: number
}

export type EducationType = {
  title: string
  start: string
  finish: string
  text: string
}

export type ExperienceType = {
  title: string
  start: string
  isCurrent: boolean
  finish: string
  text: string
  perks: PerkType[]
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
  edu?: EducationType[]
  exp?: ExperienceType[]
  perks?: PerkType[]
}
