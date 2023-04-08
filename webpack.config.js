const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./frontend/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "frontend/public"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "frontend/public"),
    port: 3000,
    open: true,
  },
};
