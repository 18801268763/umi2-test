
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  hash: true,
  // 配置 external
  // externals: {
  //   'react': 'window.React',
  //   'react-dom': 'window.ReactDOM',
  // },
  history: 'hash',
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       chunkIds: 'named',
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'all',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },

  devServer: {
    port: 10000,
    open: true,
    hot: true
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        dynamicImport: true, //是否启用按需加载
        hmr: true //是否启用 dva 的 热更新
      },
      dynamicImport: true,
      title: 'umi2-test',
      dll: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /shared\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
