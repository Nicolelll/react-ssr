/*
 * @Author: zhangLing
 * @Date: 2020-04-03 09:32:33
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 10:34:01
 * @Description: 文件描述
 */
import React from 'react'
import '../App.css'
import logo from '../logo.svg'

const App = () => {
  console.log('render')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
export default App