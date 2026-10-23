/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pangasinanheritage',
  assetPrefix: '/pangasinanheritage/', // <-- ADD THIS LINE
  images: {
    unoptimized: true,
  },
};

export default nextConfig;