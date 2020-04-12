import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//* Redux Imports
import { Provider } from 'react-redux'
import store from './store/store'

//* CSS Normalization
import 'sanitize.css/sanitize.css'

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
