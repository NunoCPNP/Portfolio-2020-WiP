import React from "react";
import styled from "@emotion/styled";

import Button from "./Button";

import { yellow } from "../../styles/colors";

const BlogTopBar: React.FC = () => {
  return (
    <Wrapper>
      <Button>Login</Button>
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
