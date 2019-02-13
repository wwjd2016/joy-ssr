import {renderToString} from 'react-dom/server'
import React, {Fragment} from 'react'
import {Provider} from 'react-redux'
import {StaticRouter, Route, matchPath} from 'react-router-dom'
import routes from './routes'
import {getServeStore} from './store'

export const renderServe = (req, res) => {
  // TODO: 匹配当前路由，调用组件的loadData方法，在服务端初始化数据
  const store = getServeStore()
  const matchRoutes = []

  routes.some(route => {
    const match = matchPath(req.path, route)
    if(match) {
      matchRoutes.push(route)
    }
  })

  const arr = []

  matchRoutes.map(item => {
    if(item.loadData) {
      arr.push(item.loadData(store))
    }
  })

  Promise.all(arr).then(() => {
    const Content = <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Fragment>
          {
            routes.map(item => <Route key={item.path} {...item} />)
          }
        </Fragment>
      </StaticRouter>
  </Provider>
  res.send(`<html>
  <head><title>ssr</title></head>
  <body>
    <div id="root">${renderToString(Content)}</div>
    <script>window.__INIT__STATE__ = ${JSON.stringify(store.getState())}</script>
    <script src='/index.js'></script>
  </body>
</html>`)
  }).catch(e => console.log(e))
}