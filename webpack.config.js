const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    entry1: {
      import: "./src/entry1.ts",
      publicPath: "customPublicPath/", //?
    },
    library: {
      import: "./src/libraryEntry.ts",
      filename: "[name].[contenthash].output-lib.js",
      library: {
        name: "Library",
        type: "assign-properties",
      },
    },
    entry2: {
      import: "./src/entry2.ts",
      dependOn: "shared",
    },
    entry3: {
      import: "./src/entry3.ts",
    },
    shared: ["react"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
