/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
        {
          protocol: "https",
          hostname: "img.shields.io",
        },
      ],
    },
  
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(pdf)$/,
        type: "asset/resource",
      });
      return config;
    },
  };
  
  export default nextConfig;