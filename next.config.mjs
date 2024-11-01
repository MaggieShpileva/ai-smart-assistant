/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental', //prerender https://nextjs.org/learn/dashboard-app/partial-prerendering#implementing-partial-prerendering
  },
}

export default nextConfig
