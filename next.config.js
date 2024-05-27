/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    i18n,
    images: {
        domains: [
            'localhost',
            'cdn.crystores.org',
            'cdn.akamai.steamstatic.com',
            'community.akamai.steamstatic.com',
            'avatars.akamai.steamstatic.com',
            'cdn.discordapp.com',
        ],
    },
}

module.exports = nextConfig
