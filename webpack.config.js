const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  mode: "development",
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/main.ts",
  output:{
    path:`${__dirname}/public`,
    filename:"main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader:"vue-loader"
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts",".vue" ],
    alias: {
      // vue-template-compilerに読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [new VueLoaderPlugin()]
};
