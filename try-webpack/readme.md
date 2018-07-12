
"build": "webpack --mode production"     --mode是参数  

webpack 是一个打包（build）工具

为什么要打包 why ?
    常规的（落后的）开发方式， jQuery html css 交给后端上线
    MVVM开发时代， 一切皆可打包

webpack 将现代 js 开发中的各种新型有用技术，集合打包，打包前，无法运行，（js es6 module,stylus 不支持浏览器直接执行， .hbs 模板翻译， .vue）在目标容器上运行

一切静态资源 =打包> 目标项目 打包结果可运行

考题
怎么手写webpack 配置 

entry: './src/index.js' 入口文件 
path 是node内置模块

有webpack.config.js一定会打包

__dirname  巨牛逼  在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。

在本地webpack一下就可以打包

修改之后npm run build打包之后执行 node dist/main.js 证明webpack将入口文件打包到了dist目录下，并可以正常运行

从入口到出口之间 按照文件运行的顺序打包
打包之后要编译
一切皆可打包都是因为loader
不同的模块有不同的规则
测试一下 test:/\.less$/   $代表匹配结束 \. 转义
相应的文件模块有相应的loader

安装相应的loader
yarn add css-loader -D
yarn add style-loader -D
yarn add less -D
yarn add less-loader -D

再次打包npm run build

css可以打包到js里面去  dom 里面有一个js text
ExtractTextPlugin 插件可以将css从js里面抽离出来，css分开打包
变量 占位符 系统命名，也可以自己取
  style-loader  就是：style  fallback后退一步 

  安装一下yarn add extract-text-webpack-plugin@last 选择beta.0   指定一下版本
  npm run build 
  将css 从js里面抽离出来了

  webpack 只要全局安装了就可以打包
  按文件模块顺序打包
 浏览器不支持common js模块化方案 

 yarn add babel-core babel-loader babel-preset-env -D


 打包前就是运行不了
 html打包专门有一个插件去做
 webpack是生态  很大很大 接管整个前端工作流
 yarn add html-webpack-plugin
 再次打包生成dist目录，html 引入了 css js

 引入gif图
根据文件地址匹配文件 |在正则表达式里面是或者的意思
 yarn add file-loader
 assets目录放在src下面
 
 yarn add copy-webpack-plugin -D  就是都没有的情况下，就是用这个复制的插件
 npm run build

 在dist 下面live-server
 
 "start": "webpack-dev-server --mode development" 开发阶段不用Live-server 使用 webpack-dev-server

 yarn add webpack-dev-server -D 安装一下
 npm run start 或者 npm run dev 
 不过在这之前把dist 目录删除 
 npm run start 创建假的接口api 

 在node里面没有相对路径要不就是内置模块，要不就是node_modules里面的文件,vue 里面的@有点类似，代表src
 这里的 utils 来自配置文件
 再加一个模块
 resolve:{
        alias:{
            utils: path.resolve(__dirname,'src/utils')
        }
    },
 @作用？
 webpack改了配置文件，一定要重启

 引入style 
 新建style

 {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                })
            }

            一般都是css-loader 大不了是style-loader

yarn add lodash  提供了很多很好用的js方法

将框架导入代码