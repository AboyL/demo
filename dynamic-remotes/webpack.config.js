const ExternalTemplateRemotesPlugin = require("./ExternalTemplateRemotesPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: [
    "./src/index",
  ],
  mode: "development",
  target: "web",
  devServer: {
    port: 3333,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  cache: {
    type: 'filesystem'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'test',
      filename: 'remoteEntry.js',
      remotes: {
        antd: `antd@[window.antdUrl]/remoteEntry.js`,
      },
      shared: {
        react: {
          singleton: true, // only a single version of the shared module is allowed
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          singleton: true, // only a single version of the shared module is allowed
        },
      },
    }),
    // Caching cannot be generated using this plugin
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
