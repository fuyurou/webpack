const path = require ('path');
const webpack =require ('webpack');
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const ExtractTextPlugin = require ('extract-text-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')
// console.log(__dirname)  给绝对路径
// console.log(path.resolve(__dirname,'dist'));
module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), //__dirname 系统级变量得到物理路径
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include:[
                    path.resolve(__dirname,'src'), //只作用于src
                ],
                use: 'babel-loader' //相当于拉到内存里面 
            },
            {
                test:/\.less$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
                
            },
            {
                test: /\.(png|jpg|gif)$/, //匹配所有的图片
                use: [
                    {
                        loader: 'file-loader'
                      }
            
                ]
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                })
            }
        ]
    },
    resolve:{
        alias:{
            utils: path.resolve(__dirname,'src/utils')
        },
        extensions: ['.js','.json','.css','.less']
    },
    plugins: [
        new HtmlWebpackPlugin({
            file:'index.html',
            template:'src/index.html'
        }),
        new ExtractTextPlugin('[name].css'),//[name] []就是占位符/变量
        new CopyWebpackPlugin([{
            from:'src/assets/favicon.ico',
            to : 'favicon.ico'
        }

        ]),
        new webpack.ProvidePlugin({
            '_':'lodash'
        }
           
        )
    ],
    devServer: {
        port: '1314',
        before(app){
            app.get('/api/test.json',(req,res)=> {
                res.json({
                    code:200,
                    message: 'hello world'

                })
            })//路由接口 得到地址
        }
    }
}