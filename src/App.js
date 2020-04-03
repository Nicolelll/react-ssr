/*
 * @Author: zhangLing
 * @Date: 2020-04-02 14:56:15
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 11:07:42
 * @Description: 文件描述
 */
import React from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

const routes = require.context('./routes', false, /\.js$/)

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Redirect form='/' to='/app' /> */}
        {
          routes.keys().map(item => {
            let [ path ] = /\/\w+/.exec(item)
            return <Route path={path} component={routes(item).default} key={item} exact />
          })
        }
      </Switch>
    </BrowserRouter>
  );
}


export default Routes;
