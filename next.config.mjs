/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required to generate a static site
    reactStrictMode: true, // Optional: Helps with identifying issues in dev mode
    images: {
      unoptimized: true, // Useful for static export to avoid image optimization errors
    },
    trailingSlash: true, // Adds trailing slashes to URLs (helps with static file linking)
  };
  
  export default nextConfig;
  