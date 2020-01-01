import React from 'react';
import styled from '@emotion/styled';

import Posts from './Posts';

const Blog: React.FC = () => {
  return (
    <Wrapper>
      <Posts />
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`;
