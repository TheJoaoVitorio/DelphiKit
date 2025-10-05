/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://delphikit.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://delphikit.vercel.app/sitemap.xml',
        ],
    },
    exclude: ['/404'],
    changefreq: 'daily',
    priority: 0.7,
}