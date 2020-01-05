import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { yellow } from '../../styles/colors';

const BlogTopBar: React.FC = () => {
  return (
    <Wrapper>
      <Link to="">Login</Link>
    </Wrapper>
  );
};

export default BlogTopBar;

const Wrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  background-color: ${yellow};
  padding: 1rem;

  a {
    padding-right: 3rem;
  }
`;
