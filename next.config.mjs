/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Reduce Safari stale-chunk issues: avoid aggressive caching of JS chunks on localhost
  async headers() {
    return [
      {
        source: "/_next/static/chunks/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

