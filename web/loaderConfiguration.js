const path = require('path');

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build
  include: [
    path.resolve(
      __dirname,
      '../App.js',
    ),
    path.resolve(
      __dirname,
      '../AppWeb.js',
    ),
    path.resolve(
      __dirname,
      '../components',
    ),
    path.resolve(
      __dirname,
      '../helpers',
    ),
    path.resolve(
      __dirname,
      '../navigation',
    ),
    path.resolve(__dirname, '../state'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app
      plugins: ['react-native-web'],
      // The 'react-native' preset is recommended (or use your own .babelrc)
      presets: ['react-native'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  imageLoaderConfiguration,
  babelLoaderConfiguration,
};
