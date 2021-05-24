const withPlugins = require('next-compose-plugins');
const svgr = require("@svgr/webpack");
const withImages = require('next-images');


const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    },
    {
      test: /\.jpg$/,
      use: ["next-images"]
    });

    return config;
  },
  useFileSystemPublicRoutes: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

module.exports = withPlugins([],nextConfig);


/*
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    },
};
*/