const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolveDir = (str) => path.resolve(__dirname, str);
console.log(path.resolve(__dirname, "./dist"));
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 配置无入口的 Chunk 在输出时的文件名称
    // chunkFilename:""
    // 输出文件都放到 dist 目录下(输出文件存放的本地目录必须是决定路径string类型)
    // D:\github-code\frontend-thick-talk\webpack-starter\dist
    path: resolveDir("./dist"),
    //
    publicPath: "", // 配置发布到线上资源的 URL 前缀 (str类型) 默认值是 ''
    // 异步加载相关
    // crossOriginLoading: "",
    // 其他配置项
  },
  devServer: {
    // contentBase: "./dist",
    hot: true, // 开启模块热替换
    port: "8080", // 监听的端口
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        // 命中 JavaScript 文件
        test: /\.js$/,
        // 用 babel-loader 转换 JavaScript 文件
        // ?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 编译结果加快重新编译速度
        // use: ["babel-loader?cacheDirectory"],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env"],
            },
            // // enforce:'post' 的含义是把该 Loader 的执行顺序放到最后
            // // enforce 的值还可以是 pre，代表把 Loader 的执行顺序放到最前面
            // enforce: "post",
          },
        ],
        // 只命中src目录里的js文件，加快 Webpack 搜索速度
        include: path.resolve(__dirname, "src"),
      },
      {
        // 命中 SCSS 文件
        test: /\.scss$/,
        // 使用一组 Loader 去处理 SCSS 文件。
        // 处理顺序为从后到前，即先交给 sass-loader 处理，再把结果交给 css-loader 最后再给 style-loader。
        use: ["style-loader", "css-loader", "sass-loader"],
        // 排除 node_modules 目录下的文件
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 对非文本文件采用 file-loader 加载
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
