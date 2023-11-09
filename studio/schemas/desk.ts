import { StructureBuilder } from 'sanity/desk'

const structure = (S: StructureBuilder) =>
  S.list()
    .id('general')
    .title('Content')
    .items([
      S.documentListItem().id('personalData').title('General Data').schemaType('personalData'),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .id('pages')
            .items([
              S.documentListItem().id('aboutMe').title('About Me').schemaType('aboutMePage'),
              S.documentListItem().id('services').title('Services').schemaType('servicesPage'),
              S.documentListItem().id('works').title('Portfolio').schemaType('portfolioPage'),
              S.documentListItem().id('blog').title('Blog').schemaType('blogPage'),
              S.documentListItem().id('contact').title('Contact').schemaType('contactPage'),
            ])
        ),
      S.divider(),
      S.listItem().title('Posts').child(S.documentTypeList('post')),
      S.listItem().title('Authors').child(S.documentTypeList('author')),
      S.listItem().title('Categories').child(S.documentTypeList('category')),
      S.divider(),
      S.listItem().title('Projects').child(S.documentTypeList('project')),
      S.divider(),
    ])

export default structure
