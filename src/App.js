import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Helmet } from "react-helmet";

import { getProjects } from "./store/sanityProjects/actions";

import Header from "./components/header/Header";
import Cta from "./components/calltoaction/Cta";
import Blog from "./components/blog/Blog";

import GlobalStyle from "./styles/GlobalStyle";

function App(props) {
  useEffect(() => {
    const { getProjects } = props;
    getProjects();
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
      <Switch>
        <Route exact path="/" component={Cta} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <GlobalStyle />
    </>
  );
}

const mapStateToProps = state => ({
  data: state.sanityProjects.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProjects }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
