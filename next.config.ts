import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ //delete this if you want to run locally
  output: "export", 
  basePath: "/kuankongy.github.io",
  assetPrefix: "/kuankongy.github.io/",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
