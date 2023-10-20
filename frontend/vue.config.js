module.exports = {
  devServer: {
    host: "localhost",
    hot: true,
    proxy: {
      "/accounts": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: [
    "vue",
    "@vue/cli-service",
    // 他の依存関係を追加できます
    // 'axios'
    // 'lodash'
    // など
  ],
};
