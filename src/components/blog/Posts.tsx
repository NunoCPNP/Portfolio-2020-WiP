import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { getPosts } from '../../store/sanityBlog/actions';

import Post from './Post';

type Props = {
  getPosts: () => void;
  posts: [];
};

const Posts: React.FC<Props> = props => {
  useEffect(() => {
    const { getPosts } = props;
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Wrapper>
        {props.posts.map((item: { id: string; title: string; body: [] }) => (
          <Post key={item.id} title={item.title} body={item.body} />
        ))}
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.sanityPosts.posts
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

const Wrapper = styled('div')`
  display: flex;
  justify-items: center;
  margin-top: 2rem;
  width: 80vw;
`;
