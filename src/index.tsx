import React from 'react'
import ReactDOM from 'react-dom'
import LogRocket from 'logrocket'
import { BrowserRouter } from 'react-router-dom'

//* Redux Imports
import { Provider } from 'react-redux'
import store from './store/store'

//* CSS Normalization
import 'sanitize.css/sanitize.css'

import App from './App'

//* Service Worker
import * as serviceWorker from './serviceWorker'

//* LogRocket Initialization
LogRocket.init('ic2caa/2020-portfolio')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
