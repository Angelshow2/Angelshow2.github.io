const path = require('path')
const webpack = require('webpack') // 热更新第二步


// npm i html-webpack-plugin -D
// 导入在内存中生成html页面的插件
// 只要是插件就一定要放到 plugins 中
// 这个插件的两个作用：
//    1.自动在内存中根据指定页面生成一个内存的页面
//    2.自动把打包好的 bundle.js 追加到页面中
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件，其实就是一个 js 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
  // 在配置文件中，需手动设置 入口 和出口
  entry: path.join(__dirname, './src/main.js'), // 入口 表示使用webpack打包哪个文件
  output: { // 输出文件相关配置
    path: path.join(__dirname, './dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 指定的输出文件的名称
  },
  devServer: {  // 配置 dev-server 命令参数的第二种方式
    // --open --port 3000 --contentBase src --hot
    open: true,
    port: 3000,
    // contentBase: 'src',
    hot: true      // 启用热更新 的 第一步
  },
  plugins: [ // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(),  // 这是new一个热更新的 模块对象 启用热更新的第三步
    new htmlWebpackPlugin({ // 创建一个 在内存中 生成HTML 页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成
      filename: 'index.html' // 指定生成页面的名称
    })
  ],
  module: {  // 配置所有第三方模块加载器
    rules: [  // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },  // 配置处理 .css ；从右到左调用
      { test: /\.(png|jpg|jepg|gif|bmp)$/, use: 'url-loader?limit=264416&name=[hash:8]-[name].[ext]' },
      // 处理图片路径的 loader ---- 
      // 本地安装 file-loader  
      // ?limit 控制图片的编码格式 大于图片的用 base64 格式转码
      // name=[name].[ext]  延用原来的名字和后缀名  前面加 [hash:8]- 表示图片名称前加入八位hash值，防止重名图片引用错误
      { test: /\.(ttf|woff|woff2|eot|svg)$/, use: 'url-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  }
}











