import React from "react";
import styled from "@emotion/styled";
// import { Link } from "react-router-dom";

import { yellow } from "../../styles/colors";

import { signInWithGoogle } from "../../firebase/firebaseUtils";

const BlogTopBar: React.FC = () => {
  return (
    <Wrapper>
      <a onClick={signInWithGoogle}>Login</a>
    </Wrapper>
  );
};

export default BlogTopBar;

const Wrapper = styled("div")`
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
