module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name].pack.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
