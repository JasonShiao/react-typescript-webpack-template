import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devMode = process.env.NODE_ENV !== "production";

//const config: Configuration = {
const config = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        include: /scss/,
        sideEffects: true,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false, // see: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/114
                               //      https://github.com/webpack/webpack/issues/12558
                               //      https://github.com/webpack-contrib/mini-css-extract-plugin/issues/622
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'asset/images/'),
    },
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*",
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'html/index-template.html',
      //chunks: ['main']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
  ],
};

export default config;
