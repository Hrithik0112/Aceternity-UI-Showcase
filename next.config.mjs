/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains got depriciated in Next 14
    // domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
