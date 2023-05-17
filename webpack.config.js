const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "/build"), // the bundle output path
    filename: "js/bundle.js", // the name of the bundle
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // to import index.html file inside index.js
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    port: 3000, // you can change the port
    hot: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg|webp)$/, // to import images and fonts
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",
};
