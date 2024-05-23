import withVercelToolbar from "@vercel/toolbar/plugins/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/child-app",
  reactStrictMode: true,
};

export default withVercelToolbar()(nextConfig);
