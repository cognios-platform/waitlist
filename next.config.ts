import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `
      @use "sass:color";
      @use "@/app/_variables.scss" as *;
      @use "@/app/_media.scss" as *;
    `,
  },
};

export default nextConfig;
