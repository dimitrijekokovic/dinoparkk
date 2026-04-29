/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tqhzuvczenrfbxtjuxhu.supabase.co",
      },
    ],
  },
};

export default nextConfig;
