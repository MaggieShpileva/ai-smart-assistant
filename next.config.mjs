/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    basePath: '/ai-smart-assistant',
    output: 'export',
  },
  images: {
    localPatterns: [
      {
        pathname: '/public/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
