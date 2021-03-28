let path = require('path');

const px2rem = require('postcss-px2rem') // postcss的一个插件
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5 //设计稿等分之后的值, 等分的比例同页面rem的比例是一致的
})


function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  // runtimeCompiler: true, // 作用: 解决不适用render: h => h(App),带来的网页编译组件失败, 但是会多10k的大小
  lintOnSave: false, // 关闭esLint的规则, 注意每写完一段代码的时候需要打开看一看自己的语法有没有问题

  configureWebpack: { // 内部可以写原生的webpack配置

    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js', 
        '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
        // 'components': resolve('src/components'),
      }
    },
  },
  // 配置开发服务器
  // 修改了源代码后,需要重新手动打包, 才能看见页面的更新效果
  // 配置此项后会自动编译打包(在内存中的打包,未在本地输出dist下的系列文件的更新), 刷新浏览器
  devServer: {
    proxy:{
      //处理以/api开头的路径请求
      '/api': {
        target:'http://localhost:4000',
        pathRewrite: {
          '^/api' : '' //转发请求时去除路径前面的api
        },
        changeOrigin: true, //如果主机?|协议?也不相同, 必须加上
      },
    }
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },

}