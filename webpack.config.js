const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    entry1: {
      import: "./src/entry1.ts",
      dependOn: "shared",
    },
    library: {
      import: "./src/libraryEntry.ts",
      filename: "[name].[contenthash].output-lib.js",
      dependOn: "shared",
      library: {
        name: "Library",
        type: "var",
      },
    },
    entry2: {
      import: "./src/entry2.ts",
      dependOn: "shared",
    },
    entry3: {
      import: "./src/entry3.ts",
      dependOn: "shared",
    },
    shared: ["react"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    // publicPath: "static/",
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    alias: {
      aliasedModule: path.resolve(__dirname, "./src/aliasedModule.ts"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
