# cssExchangeLoader
这是一个webpack插件，用来替换css的颜色，方便做主题切换

# 使用方法
在webpack的配置文件中做如下配置：

{
    test: /(\.css$)|(\.scss$)/,  //只能是css scss或者less文件
    use: [
            {
                loader: path.resolve(root,'loader/cssExchangeLoader.js'), //引入loader
                options: {
                    target: 'white', //选择要替换掉的样式值，可以是任何字符串
                    alternative: 'black' //输入新的样式值，可以是任何字符串
                }
            }
        ],
    exclude: [/node_modules/,/loader/] //排除一些没用的目录
},