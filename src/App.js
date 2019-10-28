import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import { getProjects } from './store/sanityProjects/actions'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cta from './components/calltoaction/Cta'

import GlobalStyle from './styles/GlobalStyle'

function App (props) {
  useEffect(() => {
    const { getProjects } = props
    getProjects()
  }, [])

  return (
    <>
      <Helmet>
        <title>Nuno Pereira - Front End Developer</title>
        <meta name='description' content='Nuno Pereira Front End Developer Portfolio' />
      </Helmet>
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

const mapStateToProps = state => ({
  data: state.sanityProjects.data
})

const mapDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
