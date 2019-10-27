import React from 'react'
import styled from '@emotion/styled'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter data-test='footer-component'>
      <TextWrapper>
        Built with
        <span>
          <FaHeart style={{ fontSize: '1.4rem', color: 'red' }} />
        </span>
        by Nuno Pereira
      </TextWrapper>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(38, 37, 51);
  width: 100vw;
  height: 5vh;
`

const TextWrapper = styled.div`
  display: flex;
  align-content: center;
  color: white;
  text-transform: uppercase;
  font-size: 1.3rem;

  span {
    padding: 0 .6rem;
  }
`
