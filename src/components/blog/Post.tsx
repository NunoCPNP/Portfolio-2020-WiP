import React from "react";
import styled from "@emotion/styled";

import { white } from "../../styles/colors";

type Props = {
  title: string;
  body: any;
};

const Post: React.FC<Props> = ({ title, body }) => {
  return (
    <Wrapper>
      <StyledTitle>
        <h2>{title}</h2>
      </StyledTitle>
      {body.map((item: { children: [] }) =>
        item.children.map((item: { _key: string; text: string }) => (
          <p key={item._key}>{item.text}</p>
        ))
      )}
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled("div")`
  color: ${white};

  & p {
    font-size: 1.3rem;
  }
`;

const StyledTitle = styled("div")`
  margin: 1rem 0;
  background: linear-gradient(
    180deg,
    rgba(0, 35, 36, 0) 62%,
    rgb(108, 190, 238) 38%
  );
  display: inline-block;
  padding: 0.1rem 0.5rem;

  & h2 {
    font-size: 2rem;
    line-height: 1;
  }
`;
