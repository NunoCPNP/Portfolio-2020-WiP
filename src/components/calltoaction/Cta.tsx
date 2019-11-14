import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BackgroundImage from "../../assets/yellow_asset.png";
import MainImage from "../../assets/cta.png";
import CtaText from "./CtaText";

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
      <StyledText />
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
  grid-row: 3 / 11;
  align-self: center;
  justify-self: right;
  max-height: 100%;
  max-width: 70%;
`;

const StyledText = styled(CtaText)`
  grid-column: 2 / 5;
  grid-row: 3 / 10;
  z-index: 10;
`;
