/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://nextjs-dashboard-orcin-two.vercel.app/",
      },
    ],
  },
};

module.exports = nextConfig;
