import {renderToString} from 'react-dom/server'
import React, {Fragment} from 'react'
import {Provider} from 'react-redux'
import {StaticRouter, Route} from 'react-router-dom'
import routes from './routes'
import {getStore} from './store'

export const renderServe = () => {
  const store = getStore()

  const Content = <Provider store={store}>
      <StaticRouter>
        <Fragment>
          {
            routes.map(item => <Route key={item.path} {...item} />)
          }
        </Fragment>
      </StaticRouter>
  </Provider>
  return `<html>
    <head><title>ssr</title></head>
    <body>
      <div id="root">${renderToString(Content)}</div>
      <script>window.__INIT__STATE__ = ${JSON.stringify(store.getState())}</script>
      <script src='/index.js'></script>
    </body>
  </html>`
}