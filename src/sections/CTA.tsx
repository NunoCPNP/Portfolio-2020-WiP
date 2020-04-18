import React from 'react'

import AnchorButton from '../components/buttons/AnchorButton'

import { SectionWrapper, CTAText, ButtonsContainer } from './CTA.styles'

import ctaImage from '../assets/ctaSVG.svg'

type Props = {}

const CTA: React.FC<Props> = () => {
  return (
    <SectionWrapper id="Home">
      <img src={ctaImage} alt="" />
      <CTAText>
        <h3>
          <span>Hello</span>
        </h3>
        <h2>
          I'm <span>Nuno Pereira</span>
        </h2>
        <h3>a Front-End Developer</h3>
        <ButtonsContainer>
          <AnchorButton label="GitHub" icon="github" linkTo="https://github.com/NunoCPNP" blankTarget />
        </ButtonsContainer>
      </CTAText>
    </SectionWrapper>
  )
}

export default CTA
