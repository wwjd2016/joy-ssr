import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import {getStore} from '../store/index'
import routes from '../routes'

const store = getStore(window.__INIT__STATE__)
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        {
          routes.map(item => <Route key={item.path} {...item} />)
        }
      </Fragment>
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />, document.getElementById('root'))