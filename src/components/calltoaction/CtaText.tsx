import React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
};

const CtaText: React.FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h4>Hello</h4>
      <h2>I'm Nuno Pereira</h2>
      <h3>A Front-End Developer</h3>
    </Wrapper>
  );
};

export default CtaText;

const Wrapper = styled.div``;
