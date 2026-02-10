/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  distDir: "dist",
  // GitHub Pages serves from subdirectory /repo-name/
  basePath: "/oakshire",
  assetPrefix: "/oakshire/",
  images: {
    unoptimized: true,
  },
};

export default config;
