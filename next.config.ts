import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Allow unoptimized local images during development while
    // the user is populating public/images/work/ with real photos.
    // Remove this setting (or set to false) before deploying to production.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
