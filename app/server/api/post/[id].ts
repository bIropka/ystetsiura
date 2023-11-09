import { createError } from 'h3'
import { getBlogData } from '~/api/queries'

export default defineEventHandler(async (event) => {
  const blogData = await getBlogData()
  const postId = event.context.params?.id

  const post = blogData.posts?.find((p) => p.slug.current === postId)

  return post || createError({ statusCode: 404, statusMessage: 'Post Not Found' })
})
