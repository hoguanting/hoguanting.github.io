import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const recommendationCategoryKeys = ['Articles', 'Videos', 'Books', 'Blogs', 'Podcast', 'Places'] as const;

const recommendationsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/recommendations" }),
    schema: z.object({
        slug: z.string().min(1).optional(),
        title: z.string(),
        date: z.date(),
        type: z.enum(['recommendation', 'reflection']),
        category: z.enum(recommendationCategoryKeys),
        creator: z.string().optional(),
        sourceUrl: z.string().url().optional(),
        summary: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

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

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        slug: z.string().min(1).optional(),
        title: z.string().optional(),
        date: z.date(),
        kind: z.enum(['personal', 'work']),
        logo: z.string().optional(),
    }),
});

export const collections = {
    recommendations: recommendationsCollection,
    thoughts: thoughtsCollection,
    projects: projectsCollection,
};
