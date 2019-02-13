import express from 'express'
import React, {Fragment} from 'react'
import {Provider} from 'react-redux'
import {renderToString} from 'react-dom/server'
import {StaticRouter, Route, matchPath} from 'react-router-dom'
import routes from '../routes'
import {renderServe} from './uitls'
import {getServeStore} from '../store'

const app = express()

app.use(express.static('public'))

app.get('/api/test', (req, res) => {
  res.json({code: 200, data: {city: '北京', weather: 'snow'}})
})

app.get('*', (req, res) => {
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
  res.send(renderServe(store, renderToString(Content)))
  }).catch(e => console.log(e))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))