import React from 'react'
import styled from '@emotion/styled'
import {
  FaGithubAlt,
  FaHeart,
  FaDev,
  FaLinkedin,
  FaEnvelopeOpenText
} from 'react-icons/fa'

const Footer = () => {
  return (
    <StyledFooter data-test='footer-component'>
      <TextWrapper>
        Built with
        <span>
          <FaHeart />
        </span>
        by Nuno Pereira
      </TextWrapper>
      <LinksWrapper>
        <a href='/'>
          <FaEnvelopeOpenText />
        </a>
        <a href='/'>
          <FaLinkedin />
        </a>
        <a href='/'>
          <FaGithubAlt />
        </a>
        <a href='/'>
          <FaDev />
        </a>
      </LinksWrapper>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer``

const TextWrapper = styled.div``

const LinksWrapper = styled.div``
