const path = require('path');

module.exports = {
  entry: './src/lib/bundleEntry.js',
  output: {
    filename: 'megaScript.js',
    path: path.resolve(__dirname, 'dist')
  }
};
