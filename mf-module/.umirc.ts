import { defineConfig } from 'umi';
import webpack from 'webpack';
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

export default defineConfig({
  webpack5:{},
  dynamicImport: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/index' },
  ],
  fastRefresh: {},
  chainWebpack: (webpackConfig) => {
    webpackConfig.plugin('mf').use(webpack.container.ModuleFederationPlugin, [{
      name: "test",
      filename: "remoteEntry.js",
      exposes: {
        '.': "./src/index.js"
      }
    }]);
    webpackConfig.plugin('remote').use(ExternalTemplateRemotesPlugin)
    return webpackConfig;
  },
});
