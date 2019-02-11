import {Route} from 'react-router-dom'
import Home from './containers/home'
import Login from './containers/Login'

export default [
  {
    path: '/',
    exact: false,
    component: Home,
    // children: [
    //   {
    //     path: '/home',
    //     exact: true,
    //     component: Home
    //   }
    // ]
  }, {
    path: '/login',
    exact: true,
    component: Login
  }
]