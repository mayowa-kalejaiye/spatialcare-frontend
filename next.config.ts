import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://spatialcare-backend.onrender.com/api/:path*',
      },
    ];
  },
  allowedDevOrigins: ['192.168.0.133', '172.20.10.2']
};

export default nextConfig;
