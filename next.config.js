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
    },
    {
      test: /\.mp4$/,
      use: ["next-videos"]     
    });
    return config;
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