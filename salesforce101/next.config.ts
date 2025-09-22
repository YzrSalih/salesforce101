import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack uses this folder as the project root to avoid lockfile confusion
  turbopack: {
    root: __dirname,
  },
  /* config options here */
};

export default nextConfig;
