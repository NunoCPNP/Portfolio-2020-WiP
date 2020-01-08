import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BackgroundImage from "../../assets/yellow_asset.png";
import MainImage from "../../assets/cta.png";
import CtaText from "./CtaText";

const Cta: React.FC = () => {
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

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(15, 1fr);
  height: calc(100vh - 5rem);
`;

const StyledBackground = styled(motion.img)`
  grid-column: 9 / 16;
  grid-row: 1 / 16;
  height: 100%;
  width: 100%;
  z-index: -10;
`;

const StyledImage = styled(motion.img)`
  grid-column: 6 / 16;
  grid-row: 3 / 14;
  align-self: center;
  justify-self: center;
  max-height: 100%;
  max-width: 95%;
`;

const StyledText = styled(CtaText)`
  grid-column: 2 / 6;
  grid-row: 4 / 13;
  align-self: center;
  z-index: 10;
`;
