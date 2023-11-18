const path = require('path');

module.exports = {
  entry: {
    main: './dist/main.js',
    //bundle2: './dist/panel.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundles')
  }
};
