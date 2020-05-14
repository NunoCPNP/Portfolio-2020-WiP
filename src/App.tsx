import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//* Styled Components Imports
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from './themes/darkTheme'
import { darkBlue } from './styles/colors'
import GlobalStyles from './styles/GlobalStyles'
import styled from './themes/theme'

//* Redux Imports
import { useSelector } from 'react-redux'
import { StoreInterface } from './store/interface'

//* Component Imports
import Toast from './components/toast/Toast'
import NavBar from './components/navBar/NavBar'
import Loader from './components/loader/Loader'

const MainPage = lazy(() => import('./pages/MainPage'))
const Blog = lazy(() => import('./pages/Blog'))
const Admin = lazy(() => import('./pages/Admin'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App: React.FC = () => {
  const { message, type, visible } = useSelector(
    (state: StoreInterface) => state.controllers.appControllers.notifications,
  )

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Nuno Pereira - Front End Developer</title>
        <meta name="description" content="Nuno Pereira Front End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Suspense fallback={<Loader />}>
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
          {visible && <Toast type={type} message={message} />}
        </ThemeProvider>
      </Suspense>
      <GlobalStyles />
    </>
  )
}

export default App

export const Main = styled('main')`
  background-color: ${darkBlue};
`
