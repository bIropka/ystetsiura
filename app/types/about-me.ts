import {
  defaultSectionType,
  EduExpType,
  PerkType,
  ServiceType,
  TestimonialType,
} from '~/types/common'

export interface SectionAboutMeType extends defaultSectionType {
  title: string
  list: {
    label: string
    value: string
    _key: string
  }[]
  text: any[]
}

export interface SectionEducationType extends defaultSectionType {
  list: EduExpType[]
}

export interface SectionExperienceType extends defaultSectionType {
  list: EduExpType[]
}

export interface SectionLanguagesType extends defaultSectionType {
  list: PerkType[]
}

export interface SectionPerksType extends defaultSectionType, SectionLanguagesType {}

export interface SectionServicesType extends defaultSectionType {
  list: ServiceType[]
}

export interface SectionTestimonialsType extends defaultSectionType {
  list: TestimonialType[]
}

export type AboutMeDataType = {
  sectionAboutMe: SectionAboutMeType
  sectionEducation: SectionEducationType
  sectionExperience: SectionExperienceType
  sectionLanguages: SectionLanguagesType
  sectionPerks: SectionPerksType
  sectionServices: SectionServicesType
  sectionTestimonials: SectionTestimonialsType
  _id: string
}
