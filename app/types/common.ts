import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type defaultSectionType = {
  enabled?: boolean
  title?: string
}

export type PerkType = {
  title?: string
  level?: string
  percents?: number
  exp?: number
  _id?: string
}

export type EduExpType = {
  title?: string
  startDate?: string
  isCurrent?: boolean
  finishDate?: string
  type?: 'Full-time' | 'Part-time'
  position?: string
  text?: string
  perks?: PerkType[]
  _id?: string
}

export type ServiceType = {
  title?: string
  text?: string
  _id?: string
}

export type TestimonialType = {
  image?: SanityImageSource
  name?: string
  company?: string
  project?: string
  url?: string
  position?: string
  text?: string
  _id?: string
}
