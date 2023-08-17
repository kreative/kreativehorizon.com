const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.kreativeusa.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/press/press-releases",
        destination: "/press",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://support.kreativeusa.com/horizon",
        permanent: true,
      },
      {
        source: "/hackisu",
        destination: "/events/hackisu-v2",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/community",
        permanent: true,
      },
    ];
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

module.exports = withMDX(nextConfig);
