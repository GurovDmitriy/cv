export type StackItem = {
  caption: string
  description: string
  image: string
}

export type Content = {
  title: string
  tagline: string
  description: string
  descriptionSecondary: string
  cta: string
  ctaHref: string
}

export const CONTENT: Content = {
  title: "Dmitriy Gurov",
  tagline: "Frontend Engineer",
  description:
    "Hire me to run a frontend audit of your company — codebase, architecture, and engineering processes — and get a clear plan of action as a result.",
  descriptionSecondary:
    "I'm always open to new opportunities and would be glad to discuss them.",
  cta: "View CV",
  ctaHref: "/docs/intro",
}
