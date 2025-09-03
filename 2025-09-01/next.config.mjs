/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
    basePath: '/zip-upload',
  
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
    images: { unoptimized: true },
  
};

export default nextConfig;
