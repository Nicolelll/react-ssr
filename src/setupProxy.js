/*
 * @Author: zhangLing
 * @Date: 2020-04-03 15:09:37
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 15:17:31
 * @Description: 文件描述
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:3030',
    })
  )
}