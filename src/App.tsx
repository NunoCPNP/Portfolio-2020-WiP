import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

//* Emotion Imports
import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from './themes/darkTheme'
import { darkBlue } from './styles/colors'
import GlobalStyles from './styles/GlobalStyles'
import styled from './themes/theme'

//* Component Imports
import NavBar from './sections/navBar/NavBar'
import Loader from './components/loader/Loader'
// import Toast from './components/toast/Toast'

const MainPage = lazy(() => import('./pages/main/MainPage'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const NotFound = lazy(() => import('./pages/notFound/NotFound'))

const App: React.FC = () => {
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
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </Main>
          {/* {visible && <Toast type={type} message={message} />} */}
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
