import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//* Styled Components Imports
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from './themes/darkTheme'
import { darkBlue } from './styles/colors'
import GlobalStyles from './styles/GlobalStyles'
import styled from './themes/theme'

//* Redux Imports
import { useSelector, useDispatch } from 'react-redux'
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

  console.log('VARIABLES: ', process.env)

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Nuno Pereira - Front End Developer</title>
        <meta name="description" content="Nuno Pereira Front End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          <Main>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/admin" component={Admin} />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </Main>
          <ThemeToggler />
          {visible && <Notifications type={type} message={message} />}
        </ThemeProvider>
      </>
      <GlobalStyles />
    </>
  )
}

export default App

export const Main = styled('main')`
  background-color: ${darkBlue};
`
