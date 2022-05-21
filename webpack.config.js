const path = require("path");

module.exports = {
  entry: {
    entry1: {
      import: "./src/entry1.ts",
      publicPath: "customPublicPath/", //?
    },
    entry2: {
      import: "./src/entry2.ts",
      dependOn: "entry3",
    },
    entry3: {
      import: "./src/entry3.ts",
      runtime: "entry3Runtime", // ?
    },
    library: {
      import: "./src/libraryEntry.ts",
      filename: "[name].[contenthash].output-lib.js",
      library: {
        name: "Library",
        // type: "commonjs2",
        type: "var",
      },
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
};
