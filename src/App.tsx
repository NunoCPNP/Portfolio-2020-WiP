import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import BlogTopBar from "./components/blogTopBar/BlogTopBar";
import Header from "./components/header/Header";
import Blog from "./components/blog/Blog";
import Cta from "./components/callToAction/Cta";

import { getProjects } from "./store/sanityProjects/actions";

import GlobalStyle from "./styles/GlobalStyle";
import "sanitize.css/sanitize.css";

type Props = {
  getProjects: () => void;
};

const App: React.FC<Props> = props => {
  const [isBlogBarOpen, setBlogBarOpen] = useState(false);

  useEffect(() => {
    const { getProjects } = props;
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Nuno Pereira - Front End Developer</title>
        <meta
          name="description"
          content="Nuno Pereira Front End Developer Portfolio"
        />
      </Helmet>
      <Header />
      {isBlogBarOpen && <BlogTopBar />}
      <Switch>
        <Route exact path="/" component={Cta} />
        <Route
          path="/blog"
          render={() => <Blog visibility={setBlogBarOpen} />}
        />
      </Switch>
      <GlobalStyle />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  projects: state.sanityProjects.data
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getProjects }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
