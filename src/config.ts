export const siteConfig = {
  name: "Guan Ting Ho",
  shortBio: "Building software, reading, and writing.",
  title: "Guan Ting Ho",
  description: "A minimal, editorial personal website.",
  location: "Kuala Lumpur",
  sections: {
    thoughts: false,
    projects: false,
    recommendations: false,
    resumePage: false,
  },
  openToWork: true,
  openToWorkNotice: {
    enabled: true,
    title: "Open To Work",
    body:
      "I am currently looking for software engineering roles where I can work on thoughtful product experiences, reliable systems, and developer-facing tools. This placeholder copy should be replaced with specific role preferences and visa or work authorization requirements.",
  },
  links: {
    github: "https://github.com/hoguanting",
    linkedin: "https://www.linkedin.com/in/hogt",
    email: "mailto:hogt2005@gmail.com",
    resumePdf: {
      enabled: false,
      href: "/resume.pdf",
    },
  },
} as const;
