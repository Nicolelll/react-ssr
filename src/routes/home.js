/*
 * @Author: zhangLing
 * @Date: 2020-04-03 09:22:24
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 15:15:57
 * @Description: 文件描述
 */
import React from 'react'
import io from 'socket.io-client'

class Home extends React.PureComponent {
  componentDidMount() {
    const chat = io.connect('ws://localhost:3030')
    console.log('happeb')
    console.log(chat)
    chat.on('connect', data => {
      console.log('client data: ', data);
      chat.emit('world')
    })
  }
  render() {
    return (
      <div>this is home page</div>
    )
  }
}

export default Home
