import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BackgroundImage from "../../assets/yellow_asset.png";
import MainImage from "../../assets/cta.png";

const Cta = () => {
  return (
    <Wrapper>
      <StyledBackground
        initial={{ x: 550, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          stiffness: 100
        }}
        src={BackgroundImage}
        alt=""
      />
      <StyledImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5
        }}
        src={MainImage}
        alt=""
      />
    </Wrapper>
  );
};

export default Cta;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: calc(100vh - 5rem);
`;

const StyledBackground = styled(motion.img)`
  grid-column: 7 / 13;
  grid-row: 1 / 13;
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const StyledImage = styled(motion.img)`
  grid-column: 1 / 13;
  grid-row: 3 / 10;
  align-self: center;
  justify-self: flex-end;
  max-height: 100%;
  max-width: 70%;
`;
