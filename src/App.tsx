import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import BlogTopBar from './components/blogTopBar/BlogTopBar';
import Header from './components/header/Header';
import Blog from './components/blog/Blog';
import Cta from './components/callToAction/Cta';
import Loader from './components/loader/Loader';

import { getProjects } from './store/projects/actions';

import { auth } from './firebase/firebaseUtils';

import GlobalStyle from './styles/GlobalStyle';

//! CSS Normalization
import 'sanitize.css/sanitize.css';

type Props = {
  getProjects: () => void;
  allProjectsLoaded: boolean;
};

const App: React.FC<Props> = ({ allProjectsLoaded, getProjects }) => {
  //! Hooks to handle state from Authentication and BlogBar
  const [isBlogBarOpen, setBlogBarOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  //! Hoog to get projects from API
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! Hook to handle Authentication
  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser: any) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  });

  console.log(allProjectsLoaded);

  return (
    <>
      <Helmet>
        <title>Nuno Pereira - Front End Developer</title>
        <meta
          name="description"
          content="Nuno Pereira Front End Developer Portfolio"
        />
      </Helmet>
      {!allProjectsLoaded ? (
        <Loader />
      ) : (
        <>
          <Header />
          {isBlogBarOpen && <BlogTopBar authUser={authUser} />}
          <Switch>
            <Route exact path="/" component={Cta} />
            <Route
              path="/blog"
              render={() => <Blog visibility={setBlogBarOpen} />}
            />
          </Switch>
        </>
      )}
      <GlobalStyle />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  allProjectsLoaded: state.projects.allProjectsLoaded
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getProjects }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
