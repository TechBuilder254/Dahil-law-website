/** @type {import('next').NextConfig} */
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
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

export default withBundleAnalyzer(nextConfig);
