import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  basePath: isGithubPages ? `/${repo}` : "",
  trailingSlash: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
