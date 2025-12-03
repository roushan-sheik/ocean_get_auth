import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reqres.in",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
