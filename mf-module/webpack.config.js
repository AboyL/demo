const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new ModuleFederationPlugin({
      name: "test",
      filename: "remoteEntry.js",
      exposes: {
        '.': "./src/index.js"
      }
    })
  ]
}