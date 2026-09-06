import type { NextConfig } from "next";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? "/shukikai";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
