/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  experimental: {
    appDir: true,
  },
};

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate(nextConfig);
