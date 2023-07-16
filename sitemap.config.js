/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kreativehorizon.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: 0.7,
  exclude: ["/admin/*", "/404"],
  changefreq: "weekly",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
}