import React from 'react'
import styled from "@emotion/styled"

import BackgroundImage from "../../assets/yellow_asset.png"

const Cta = () => {
  return (
    <Wrapper>
      <StyledBackground src={BackgroundImage} alt="" />
    </Wrapper>
  )
}

export default Cta

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: calc(100vh - 4rem);
`;

const StyledBackground = styled.img`
  grid-column: 7 / 13;
  grid-row: 1 / 13;
  height: 100%;
  width: 100%;
`;