import React from 'react';
import styled from '@emotion/styled';

import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';

type Props = {
  children: string;
  type: string;
};

const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <>
      {type === 'login' && (
        <StyledButton data-test="button-component" onClick={signInWithGoogle}>
          {children}
        </StyledButton>
      )}
      {type === 'logout' && (
        <StyledButton
          data-test="button-component"
          onClick={() => auth.signOut()}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;

const StyledButton = styled('button')`
  background: none;
  border: none;
  color: inherit;
  outline: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0 3rem 0 0;
  font-size: 1.15rem;
  font-weight: 600;

  &:hover {
    font-weight: 700;
  }
`;
