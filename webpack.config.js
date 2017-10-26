// imports
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// paths & dirs
const appDirectory = fs.realpathSync(process.cwd());
const paths = {
  appDist: path.resolve(appDirectory, "dist"),
  appSrc: path.resolve(appDirectory, "src"),
  appPublic: path.resolve(appDirectory, "public"),
  appHtml: path.resolve(appDirectory, "public/index.html")
};

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "js/[name].[chunkhash:8].js",
    path: paths.appDist
  },

  devServer: {
    contentBase: paths.appDist,
    compress: true,
    port: 9000
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add resolvable extensions.
    extensions: [".js", ".jsx", ".json"]
  },

  module: {
    rules: [
      // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      // Run eslint first
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        enforce: "pre",
        loader: require.resolve("eslint-loader"),
        options: {
          configFile: ".eslintrc"
        }
      },

      // Process JS with Babel.
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: require.resolve("babel-loader"),
        options: {
          compact: true
        }
      },

      // Ensure 'use strict' is everywhere
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: "strict-loader"
      },

      // CSS loader
      {
        test: /\.css$/,
        include: paths.appSrc,
        loader: "style-loader!css-loader?modules=true&localIdentName=[name]--[local]"
      },

      // File loader
      {
        test: /\.(png|svg|jpeg|jpg|ttf|eot|woff)/,
        include: paths.appPublic,
        loader: "file?name=[path][name].[ext]"
      }
    ]
  },

  plugins: [
    // Clean the `dist` folder each build.
    new CleanWebpackPlugin([paths.appDist]),

    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),

    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: "asset-manifest.json"
    }),

    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how Webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
