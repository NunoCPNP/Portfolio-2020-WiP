import React from 'react';
import styled from '@emotion/styled';

import Button from './Button';

import { yellow } from '../../styles/colors';

type Props = {
  authUser: null | { displayName: string };
};

const BlogTopBar: React.FC<Props> = ({ authUser }) => {
  console.log('Auth User: ', authUser);

  return (
    <Wrapper>
      {authUser ? (
        <>
          <WelcomeMsg>{`Hi ${authUser.displayName}`}</WelcomeMsg>
          <Button type="logout">Logout</Button>
        </>
      ) : (
        <Button type="login">Login</Button>
      )}
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
    cursor: pointer;
    padding-right: 3rem;
    text-decoration: none;
    font-size: 1.15rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const WelcomeMsg = styled('div')`
  padding-right: 2rem;
  font-size: 1.15rem;
`;
