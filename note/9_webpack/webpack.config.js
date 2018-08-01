const path = require ('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");
const webpack =require('webpack');
const entry = require ('./entry_webpack.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports={
    mode : "development",
    entry:entry,
    
    output:{
        path:path.resolve(__dirname,'./dist'),//打包到哪个路径 //必须是绝对路径//上线的是dist文件夹
        filename:'[name].js',//(出口文件)这里name就是上面index
        publicPath:'http://localhost:8080/'
    },
    module:{
        rules:[
            {
            test:/\.css$/, //以css结尾的文件   两//代表正则表达式
            // use:['style-loader','css-loader']//css-loader是页面中加载css
            //style-loader是加载css里url之类
            
            use: ExtractTextPlugin.extract({
                fallback:"style-loader",
                use:[{
                    loader:'css-loader',
                    options:{importLoaders:1}
                },'postcss-loader']
            })
            },{
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:'500',//单位是b
                            outputPath:'images/'
                        }
                    }
                ]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader',
            },{
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    use:[{
                            loader:'css-loader'
                        },{
                            loader:'sass-loader'
                        }],
                        fallback:'style-loader'
                })
            },{
                test:/\.(jsx|js)$/,
                use:[
                    {loader:'babel-loader',
                    options:{
                        presets:[
                            'env','react'
                        ]
                    }
                }],
                exclude:/node_modules/
            }
    ]
    },
    plugins:[
        // new HtmlPlugin({
        //     minify:{
        //         removeAttributeQuotes:true//压缩 方式是去掉引号
        //     },
        //     hash:true,//在js文件加其hash值  避免用缓存文件
        //     template:'./src/index.html',//模板 用哪个html文件
        //     //默认引entry里的所有js文件 这里引用的是index1.js和index2.js
            
        // }),//热更新默认打开index.html
        // new ExtractTextPlugin("css/style.css"),
        new ExtractTextPlugin("css/index.css"),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true//压缩 方式是去掉引号
            },
            hash:true,//在js文件加其hash值  避免用缓存文件
            template:'./src/index.html',//模板 用哪个html文件
            filename:'a.html',//生成在dist下的html文件叫什么
            title:'title',
            chunks:['index1']//引用dist下的哪个js文件
        }),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true//压缩 方式是去掉引号
            },
            hash:true,//在js文件加其hash值  避免用缓存文件
            template:'./src/index.html',//模板 用哪个html文件
            filename:'b.html',//生成在dist下的html文件叫什么
            title:'title',
            chunks:['index2']//引用dist下的哪个js文件
        }),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('我的天呀'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:'./dist',//设置基本目录结构
        host:'localhost',
        port:'8080',
        compress:true,//配置服务端口号
        open:true,//页面自己打开


    },
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/,
    }
}
