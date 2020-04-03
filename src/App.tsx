import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//* Styled Components Imports
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from './themes/darkTheme'
import GlobalStyles from './styles/GlobalStyles'

//* Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './store/user/actions'
import { setProjects } from './store/projects/actions'
import { StoreInterface } from './store/interface'

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

  //* Get List of Projects
  useEffect(() => {
    //! GET PROJECTS FROM API
    dispatch(setProjects())
  }, [])

  return (
    <>
      <Helmet>
        <title>Nuno Pereira - Front End Developer</title>
        <meta name="description" content="Nuno Pereira Front End Developer" />
      </Helmet>
      <>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
          <ThemeToggler />
          {visible && <Notifications type={type} message={message} />}
        </ThemeProvider>
      </>
      <GlobalStyles />
    </>
  )
}

export default App
