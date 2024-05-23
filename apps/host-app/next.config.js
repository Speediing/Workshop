const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

/** @type {import('next').NextConfig} */
module.exports = withVercelToolbar({
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: "/child-app/:path+",
        destination: `${process.env.CHILD_APP_URL}/child-app/:path+`,
      },
      {
        source: "/docs",
        destination: `${process.env.CHILD_APP_URL}/child-app/docs`,
      },
      {
        source: "/docs/:path+",
        destination: `${process.env.CHILD_APP_URL}/child-app/docs/:path+`,
      },
      {
        source: "/pricing",
        destination: `${process.env.CHILD_APP_URL}/child-app/pricing`,
      },
      {
        source: "/pricing/:path+",
        destination: `${process.env.CHILD_APP_URL}/child-app/pricing/:path+`,
      },
    ];
  },
});
