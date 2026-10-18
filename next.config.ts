import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/about", destination: "/#experience", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
