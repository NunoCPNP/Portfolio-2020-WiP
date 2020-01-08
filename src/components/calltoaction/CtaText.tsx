import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { white, yellow } from "../../styles/colors";

type Props = {
  className?: string;
};

const CtaText: React.FC<Props> = props => {
  const { className } = props;

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className={className}
    >
      <h4>Hello</h4>
      <h2>
        <span>I'm </span>
        Nuno Pereira
      </h2>
      <h3>
        <span>a </span>Front-End Developer
      </h3>
    </Wrapper>
  );
};

export default CtaText;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  & h2,
  & h3,
  & h4 {
    color: ${white};
    font-weight: 800;
  }

  & h4 {
    font-size: 2rem;
  }

  & h2 {
    font-size: 7rem;
    color: ${yellow};

    & span {
      font-size: 4.5rem;
      color: ${white};
    }
  }

  & h3 {
    font-size: 3rem;

    & span {
      font-size: 2.5rem;
    }
  }
`;
