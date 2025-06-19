/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // <-- this makes the app exportable as static HTML
  images: {
    unoptimized: true, // <-- avoids image optimization that InfinityFree can't run
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: '', // This ensures assets are loaded correctly
  basePath: '', // Set this if you're not hosting at root
  trailingSlash: true, // This helps with static hosting
};

export default nextConfig;
