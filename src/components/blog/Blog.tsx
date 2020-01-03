import React from 'react';
import styled from '@emotion/styled';
import { Route } from 'react-router-dom';

import Posts from './Posts';

const Blog: React.FC = () => {
  return (
    <Wrapper>
      <Route path="/" component={Posts} />
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`;
