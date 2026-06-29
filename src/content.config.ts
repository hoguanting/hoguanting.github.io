import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const thoughtsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
    schema: z.object({
        slug: z.string().min(1).optional(),
        title: z.string(),
        date: z.date(),
        summary: z.string().optional(),
        category: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    thoughts: thoughtsCollection,
};
