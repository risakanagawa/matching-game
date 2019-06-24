const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
          plugins: [["@babel/plugin-proposal-class-properties"]]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024, // Convert images < 8kb to base64 strings
              name: "img/[name].[ext]"
            }
          }
        ]
        // include: path.join(__dirname, "img"),
        // loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public/")
  }
};
