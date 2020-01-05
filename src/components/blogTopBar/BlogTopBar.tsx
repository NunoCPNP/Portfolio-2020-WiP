import React from 'react';
import styled from '@emotion/styled';

import { yellow } from '../../styles/colors';

const BlogTopBar: React.FC = () => {
  return (
    <Wrapper>
      <a href="">Login</a>
    </Wrapper>
  );
};

export default BlogTopBar;

const Wrapper = styled('div')`
  display: flex;
  width: 100vw;
  background-color: ${yellow};
  padding-top: 3rem;
`;
