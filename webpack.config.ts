import path from "path";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin"; // Import the plugin
import { name, version } from "./package.json";

const webpackConfig = (env): Configuration => ({
  entry: "./src/index.tsx",
  ...(env.production || !env.development ? {} : { devtool: "eval-source-map" }),
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.PRODUCTION": env.production || !env.development,
      "process.env.NAME": JSON.stringify(name),
      "process.env.VERSION": JSON.stringify(version),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({ files: "./src/**/*.{ts,tsx,js,jsx}" }),
    // Add the CopyWebpackPlugin to copy static assets from public/ to dist/
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "public" }, // Copies everything from public/ to dist/public/
      ],
    }),
  ],
});

export default webpackConfig;
