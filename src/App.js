import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cta from './components/calltoaction/Cta'

import GlobalStyle from './styles/GlobalStyle'

function App () {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Cta} />
        </Switch>
        <Footer />
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
