module.exports = {
  siteUrl: 'https://earnwithyourcareer.blog',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://earnwithyourcareer.blog/sitemap.xml',
    ],
  },
  async generateSitemap() {
    const { data } = await axios.get(
      'https://earnwithyourcareer.blog/blogs'
    );
    const blogs = data.map((blog) => ({
      url: `/blogs/${blog.slug}`,
      changefreq: 'daily',
      priority: 0.7,
      lastmodISO: blog.updatedAt,
    }));
    return [
      {
        url: '/blogs',
        changefreq: 'daily',
        priority: 0.7,
        lastmodISO: new Date().toISOString(),
        children: blogs,
      },
    ];
  },
};

