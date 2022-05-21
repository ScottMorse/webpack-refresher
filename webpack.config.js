const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts",
    index2: "./src/index2.ts",
  },
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
};
