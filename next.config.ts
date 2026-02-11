import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/**", // Дозволяє будь-які шляхи на цьому домені
      },
      {
        protocol: "https",
        hostname: "static.boredpanda.com", // Для картинок з BoredPanda
      },
    ],
  },
};

export default nextConfig;
