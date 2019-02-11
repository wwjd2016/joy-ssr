import {renderToString} from 'react-dom/server'
import React, {Fragment} from 'react'
import {Provider} from 'react-redux'
import {StaticRouter, Route} from 'react-router-dom'
import routes from './routes'
import {getServeStore} from './store'


export const renderServe = () => {
  const store = getServeStore()
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
      <script>window.STORE = ${JSON.stringify(store)}</script>
      <script src='/index.js'></script>
    </body>
  </html>`
}