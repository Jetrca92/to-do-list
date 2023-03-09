const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/to-do-list/',
        filename: 'main.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
         {
           test: /\.(png|ico|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
        ],
      },
    };