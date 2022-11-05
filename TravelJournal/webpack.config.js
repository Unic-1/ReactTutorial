module.exports = {
  entry: {
    index: "./index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].part.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "babel-preset-env"],
          },
        },
      },
    ],
  },
};
