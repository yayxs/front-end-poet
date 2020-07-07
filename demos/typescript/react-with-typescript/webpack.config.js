module.exports = {
    entry: "./src/index.tsx",
    mode:'development',
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // 启用 source-map
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' 作为可解析的扩展名
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // 所有扩展名为.ts 或者是 tsx 的文件 我们由  `awesome-typescript-loader` 来处理
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // 所有输出的.js 文件 将有 source-map-loader 这个 loader 来重新处理
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};