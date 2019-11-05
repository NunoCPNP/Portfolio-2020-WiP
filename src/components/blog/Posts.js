import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import Post from "./Post";

import { getPosts } from "../../store/sanityBlog/actions";

const Posts = props => {
  useEffect(() => {
    const { getPosts } = props;
    getPosts();
  }, []);

  return (
    <>
      {props.posts.map(item => (
        <Post title={item.title} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.sanityPosts.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPosts }, dispatch);

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
