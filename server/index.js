/*
 * @Author: zhangLing
 * @Date: 2020-04-02 15:02:26
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 10:04:06
 * @Description: 文件描述
 */
require("asset-require-hook")({
  extensions: ["svg", "css", "less", "jpg", "png", "gif"],
  name: '/static/media/[name].[ext]'
});
require("@babel/register");
require("@babel/polyfill");
require('babel-plugin-require-context-hook/register')();
require("./app");