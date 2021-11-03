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
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack: (webpackConfig) => {
    webpackConfig.plugin('mf').use(webpack.container.ModuleFederationPlugin, [{
      name: 'Application',
      remotes: {
        'atest':"test@[window.testUrl]/remoteEntry.js"
        // 'atest':"test@http://localhost:5555/remoteEntry.js"
      },
    }]);
    webpackConfig.plugin('remote').use(ExternalTemplateRemotesPlugin)
    return webpackConfig;
  },
});
