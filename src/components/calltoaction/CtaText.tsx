import React from "react";
import styled from "@emotion/styled";

import { white, yellow } from "../../styles/colors";

type Props = {
  className?: string;
};

const CtaText: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h4>Hello</h4>
      <h2>
        <span>I'm </span>Nuno Pereira
      </h2>
      <h3>A Front-End Developer</h3>
    </Wrapper>
  );
};

export default CtaText;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-self: center;
  color: ${white};

  & h4 {
    font-size: 2rem;
  }

  & h2 {
    font-size: 6rem;
    color: ${yellow};
    font-weight: 800;

    & span {
      font-size: 4.5rem;
      color: ${white};
    }
  }

  & h3 {
    font-size: 3rem;
    font-weight: 800;
  }
`;
