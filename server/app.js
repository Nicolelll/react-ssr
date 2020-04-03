/*
 * @Author: zhangLing
 * @Date: 2020-04-02 15:02:32
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 14:47:48
 * @Description: 文件描述
 */
import Koa from 'koa2'
import React from 'react'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import { renderToString } from 'react-dom/server'
import fs from 'fs'
import path from 'path'
import { 
  StaticRouter, 
  Route, 
  Switch,
} from 'react-router-dom'

const routes = require.context('../src/routes', false, /\.js$/)
const config = {
  port: 3030
}

const app = new Koa()
const httpServer = require('http').Server(app.callback())

const io = require('socket.io')(httpServer)

io.on('connection', socket => {
  console.log('socket is connection!')
  socket.on('send', data => {
    console.log('server data', data)
    socket.emit('getMsg', 'server: hello')
  })
})

// 静态资源
app.use(
  koaStatic(path.join(__dirname, '../build'), {
    index: 'root'
  })
)

// 设置路由
app.use(
  new Router()
    .get('*', async (ctx, next) => {
      ctx.response.type = 'html' // 指定content type
      
      let shtml = ''
      const context = {}
      await new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../build/index.html'), 'utf-8', function(err, data) {
          if (err) {
            reject()
            return console.log('err:', err)
          }
          shtml = data
          resolve()
        })
      })
      ctx.response.body = shtml.replace('{{root}}', renderToString(
        <StaticRouter context={context}>
          <Switch>
            {
              routes.keys().map(item => {
                let [ path ] = /\/\w+/.exec(item)
                return <Route path={path} component={routes(item).default} key={item} exact />
              })
            }
          </Switch>
        </StaticRouter>
      ))
    })
    .routes()
)

app.listen(config.port, function() {
  console.log('server is running')
})