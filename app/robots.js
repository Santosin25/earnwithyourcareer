export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/'(book)'/",
    },
    sitemap: "https//earnwithyourcareer.blog/sitemap.xml",
  };
}
