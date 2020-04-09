import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//* Styled Components Imports
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from './themes/darkTheme'
import GlobalStyles from './styles/GlobalStyles'

//* Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { StoreInterface } from './store/interface'
import { setCurrentUser } from './store/user/actions'

//* Component Imports
import ThemeToggler from './components/themeToggler/ThemeToggler'
import NavBar from './components/navBar/NavBar'
import MainPage from './pages/MainPage'
import NotFound from './pages/NotFound'
import Notifications from './components/notifications/Notifications'
import Admin from './pages/Admin'
import Blog from './pages/Blog'

import { auth } from './firebase/firebase'

const App: React.FC = () => {
  const dispatch = useDispatch()

  const { message, type, visible } = useSelector(
    (state: StoreInterface) => state.controllers.appControllers.notifications,
  )

  //* Google OAuth Listener
  useEffect(() => {
    const googleListen = auth.onAuthStateChanged((authUser: any) => {
      authUser ? dispatch(setCurrentUser(authUser)) : dispatch(setCurrentUser(null))
    })
    return () => {
      googleListen()
    }
  })

  return (
    <>
      <Helmet>
        <title>Nuno Pereira - Front End Developer</title>
        <meta name="description" content="Nuno Pereira Front End Developer" />
      </Helmet>
      <>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/admin" component={Admin} />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </main>
          <ThemeToggler />
          {visible && <Notifications type={type} message={message} />}
        </ThemeProvider>
      </>
      <GlobalStyles />
    </>
  )
}

export default App
