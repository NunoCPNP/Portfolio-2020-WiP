import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Helmet } from "react-helmet";

import { getProjects } from "./store/sanityProjects/actions";

import Header from "./components/header/Header";
import Cta from "./components/callToAction/Cta";
import Blog from "./components/blog/Blog";
import BlogTopBar from "./components/blogTopBar/BlogTopBar";

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
