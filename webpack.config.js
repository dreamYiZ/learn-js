const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
          ],
        }),
      ],
}