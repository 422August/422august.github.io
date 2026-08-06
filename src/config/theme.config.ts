const siteUrl = (
  "https://august0422.tech"
).replace(/\/$/, "");

export const SITE = {
  name: "August's Blog",
  description:
    "記錄 AI、技術與未來的部落格。",
  url: siteUrl,
  locale: "zh-TW",
  language: "zh-TW",
  repositoryUrl: "https://github.com/422August/blog",
};

export const NAVIGATION = [
  { to: "/", label: "首頁" },
  { to: "/blog", label: "文章" },
  { to: "/about", label: "關於我" },
  { to: "/contact", label: "聯絡" },
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
  { href: "/rss.xml", label: "RSS 訂閱", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} 的 X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} 的 GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "電子郵件", icon: "mail" },
];

export const authors = [
  {
    slug: "August",
    name: "August0422",
    bio: "學生開發者",
    longBio:
      "高中生 | 主要使用 Python & JavaScript 開發 | 正在學習 NLP 與 AI 相關技術。",
    avatar: "/avatars/august.jpg",
  },
];

export const categories = [
  { slug: "code", name: "程式碼" },
  { slug: "notes", name: "筆記" },
  { slug: "news", name: "新聞" },
  { slug: "projects", name: "專案" },
  { slug: "feelings", name: "心情" },
];

export const tags = [
  { slug: "cpp", name: "C++" },
  { slug: "python", name: "Python" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "ai", name: "人工智慧" },
  { slug: "development", name: "軟體開發" },
  { slug: "ml", name: "機器學習" },
  { slug: "dl", name: "深度學習" },
  { slug: "frontend", name: "前端開發" },
  { slug: "backend", name: "後端開發" },
  { slug: "security", name: "資訊安全" },
  { slug: "international", name: "國際新聞" },
  { slug: "domestic", name: "國內新聞" },
  { slug: "leadership", name: "領導力" },
  { slug: "feelings", name: "心情" },
];