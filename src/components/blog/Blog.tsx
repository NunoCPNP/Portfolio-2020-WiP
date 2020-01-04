import React from 'react';
import { connect } from "react-redux"
import { Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Posts from './Posts';

const Blog: React.FC = () => {
  return (
    <Wrapper>
      <Route path="/" component={Posts} />
    </Wrapper>
  );
};

export default connect()(Blog);

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`;
