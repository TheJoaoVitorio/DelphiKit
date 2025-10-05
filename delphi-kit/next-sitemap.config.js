/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://delphi-kit.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://delphi-kit.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/404'],
  changefreq: 'daily',
  priority: 0.7,
}