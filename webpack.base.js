module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        },
        exclude: /node_modules/
      }
    ]
  }
}