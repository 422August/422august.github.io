const siteUrl = (
  "https://422august.github.io/blogs"
).replace(/\/$/, "");

export const SITE = {
  name: "August's Blog",
  description:
    "A blog about AI, technology, and the future.",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/422August/blogs",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "youxunzhoou61@gmail.com",
  socialHandle: "@august_0422_",
  socialUrl: "https://x.com/august_0422_",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "August",
    name: "August0422",
    bio: "Developer | AI Enthusiast | Tech Blogger",
    longBio:
      "High School Student | Coding in python & Javascript | Building cool side projects. | Learning NLP and AI-related technologies.",
    avatar: "/avatars/august.jpg",
  },
];

export const categories = [
  { slug: "ai", name: "Artificial Intelligence" },
  { slug: "algorithms", name: "Algorithms" },
  { slug: "notes", name: "Notes" },
  { slug: "code", name: "Code" },
  { slug: "news", name: "News" },
];

export const tags = [
  { slug: "cpp", name: "C++" },
  { slug: "python", name: "Python" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "news", name: "News" },
  { slug: "development", name: "Development" },
  { slug: "ml", name: "Machine Learning" },
  { slug: "dl", name: "Deep Learning" },
  { slug: "frontend", name: "Frontend" },
  { slug: "backend", name: "Backend" },
  { slug: "international", name: "International" },
  { slug: "domestic", name: "Domestic" },
  { slug: "projects", name: "Projects" },
  { slug: "leadership", name: "Leadership" },
];
