/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/stiven',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
