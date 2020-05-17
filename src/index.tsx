import React from 'react'
import ReactDOM from 'react-dom'
import LogRocket from 'logrocket'
import { BrowserRouter } from 'react-router-dom'

import { ControllersStateProvider } from './context/controllers/context'
import { UserStateProvider } from './context/user/context'

//* CSS Normalization
import 'sanitize.css/sanitize.css'

import App from './App'

//* Service Worker
import * as serviceWorker from './serviceWorker'

//* LogRocket Initialization
LogRocket.init('ic2caa/2020-portfolio')

ReactDOM.render(
  <ControllersStateProvider>
    <UserStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserStateProvider>
  </ControllersStateProvider>,
  document.getElementById('root'),
)

serviceWorker.register()
