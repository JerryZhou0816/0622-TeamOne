const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/",
  },

  //配置loader的地方
  module: {
    rules: [
      //解析es6
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      //解析css
      {
        test: /\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader"],
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
      },
      //解析图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/public"),
        to: path.resolve(__dirname, "dist"),
        ignore: ["index.html"],
      },
    ]),
  ],

  // mode:'development',

  devServer: {
    port: 9000,
    open: true,
    quiet: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },

  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
