import React from "react";
import styled from "@emotion/styled";

import { signInWithGoogle } from "../../firebase/firebaseUtils";

type Props = {
  children: string;
};

const Button: React.FC<Props> = props => {
  return (
    <>
      <StyledButton data-test="button-component" onClick={signInWithGoogle}>
        {props.children}
      </StyledButton>
    </>
  );
};

export default Button;

const StyledButton = styled("button")`
  background: none;
  border: none;
  color: inherit;
  outline: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0;
`;
