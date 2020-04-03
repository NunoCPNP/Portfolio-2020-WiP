import React from 'react'

import { SectionWrapper, CTAText } from './CTA.styles'

import ctaImage from '../../assets/ctaSVG.svg'

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
      </CTAText>
    </SectionWrapper>
  )
}

export default CTA
