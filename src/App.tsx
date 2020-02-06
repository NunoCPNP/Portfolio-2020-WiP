import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import BlogTopBar from "./components/blogTopBar/BlogTopBar";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import Cta from "./components/callToAction/Cta";
import Loader from "./components/loader/Loader";

import { getProjects } from "./store/projects/actions";

import { auth } from "./firebase/firebaseUtils";

import GlobalStyle from "./styles/GlobalStyle";

//! CSS Normalization
import "sanitize.css/sanitize.css";

const App: React.FC = () => {
  const [isBlogBarOpen, setBlogBarOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const dispatch = useDispatch();
  const allProjectsLoaded = useSelector(
    (state: any) => state.projects.allProjectsLoaded
  );

  useEffect(() => {
    dispatch(getProjects());

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
      {allProjectsLoaded ? (
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
      ) : (
        <Loader />
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
