import { StructureBuilder } from 'sanity/desk'

const structure = (S: StructureBuilder) =>
  S.list()
    .id('general')
    .items([
      S.documentListItem().id('personalData').title('Personal Data').schemaType('personalData'),
      S.documentListItem().id('aboutMe').title('About Me').schemaType('aboutMe'),
      S.documentListItem().id('resume').title('Resume').schemaType('resume'),
      S.documentListItem().id('works').title('Works').schemaType('works'),
      S.documentListItem().id('blog').title('Blog').schemaType('blog'),
      S.documentListItem().id('contact').title('Contact').schemaType('contact'),
      S.documentListItem().id('post').title('Posts').schemaType('post'),
      S.documentListItem().id('author').title('Authors').schemaType('author'),
      S.documentListItem().id('category').title('Categories').schemaType('category'),
    ])

export default structure
