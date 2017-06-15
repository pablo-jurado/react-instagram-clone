import React from 'react'
import { render } from 'react-dom'
import css from './styles/style.styl'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path='/view/:postId' component={Single}/>
    </Route>
  </Router>
)

render(
  router,
  document.getElementById('root')
)
