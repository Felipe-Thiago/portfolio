import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://skillicons.dev/icons?i=')]
  }
};

export default nextConfig;
