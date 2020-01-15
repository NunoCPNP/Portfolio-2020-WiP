import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Posts from './Posts';

type Props = {
  visibility: (arg0: boolean) => void;
};

const Blog: React.FC<Props> = props => {
  //! Hook to hanfle blog authentication bar visibility
  useEffect(() => {
    const { visibility } = props;

    visibility(true);

    return () => {
      visibility(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
