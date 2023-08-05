/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'dist',
    output: 'export',
    images: {
        domains: [
            "webullish.space"
        ]
    }
}

module.exports = nextConfig
