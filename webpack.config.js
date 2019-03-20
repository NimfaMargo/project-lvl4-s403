module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: [
    '@babel/polyfill',
    `${__dirname}/src/index.js`,
  ],
  output: {
    path: `${__dirname}/dist/public`,
    publicPath: '/assets/',
  },
  externals: {
    gon: 'gon',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
