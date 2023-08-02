export enum ExpLevel {
  BEGINNER = 'Beginner',
  MEDIUM = 'Medium',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert',
}

export type ServiceType = {
  icon: any
  title: string
  text: string
}

export type ExpItemType = {
  title: string
  date: string
  text: string
}

export type SkillItem = {
  title: string
  value: ExpLevel
}

export type PersonalDataType = {
  firstName: string
  lastName: string
  bio: any
  birthday: string
  email: string
  location: string
  phone: string
  photo: any
  position: string
}
