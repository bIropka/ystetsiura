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

export type ExpItem = {
  title: string
  date: string
  text: string
}

export type SkillItem = {
  title: string
  value: ExpLevel
}
