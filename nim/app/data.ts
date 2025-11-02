export type Project = {
  name: string
  description: string
  github: string
  techStacks: string
  video?: string
  id: string
}

export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  image: string
}

type Education = {
  institution: string
  degree: string
  end: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'NutriTrack AI',
    description:
      'AI-powered nutrition tracking app that analyzes food intake and provides personalized recommendations.',
    github: 'https://github.com/hoguanting/NutriTrack-AI',
    techStacks: 'Kotlin • Jetpack Compose • MVVM Architecture • Firebase • Gemini API',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'FlappyBirb',
    description:
      '"Flappy Bird" style game built from scratch using TypeScript and Vite, with a strong emphasis on functional programming principles.',
    github: 'https://github.com/hoguanting/FlappyBirb',
    techStacks: 'TypeScript • RXJs • Vite • Observables • Functional Programming (FP)',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'BNF Grammar to Haskell Parser Generator',
    description: 'A tool for generating Haskell parsers from BNF grammar.',
    github: 'https://github.com/hoguanting/haskell-bnf-parser-generator',
    techStacks: 'TypeScript • RxJs • Haskell • Functional Programming (FP)',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
]


export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Binder Dijker & Otte Co.',
    title: 'CSR Project Intern',
    start: 'June 2024',
    end: 'July 2024',
    link: 'https://www.bdo.my/en-gb/home',
    id: 'work1',
    image: 'https://www.studenterlauget.dk/wp-content/uploads/2024/07/BDO-Logo.png.webp',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'Monash University',
    degree: 'Bachelor of Computer Science',
    end: '2026 (Expected)',
    id: 'edu1',
  },
  {
    institution: 'Foon Yew High School',
    degree: 'Unified Examination Certificate (UEC)',
    end: '2021',
    id: 'edu2',
  },
]

/**
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]
*/

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/hoguanting',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hogt/',
  },
  {
    label: 'CV',
    link: 'https://docs.google.com/document/d/1kg-66r2_bxfsv2FgW6NGx6mpCEbjAede/edit?usp=sharing&ouid=100471996007873623968&rtpof=true&sd=true',
  },
]

export const EMAIL = 'hogt2005@gmail.com'
