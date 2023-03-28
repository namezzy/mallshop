module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        //'@': 'src', 不能瞎添加,添加会报错的
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store',
        'common': '@/common'
      }
    }
  }
}
