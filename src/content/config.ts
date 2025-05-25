import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    author: z.string(),
    charset: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = {
  posts: postsCollection,
}
