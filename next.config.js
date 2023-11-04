/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // authorize all domains
      },
    ],
  },
};

module.exports = nextConfig;
