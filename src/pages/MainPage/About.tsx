import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import AboutTextBlock from '../../components/aboutTextBock/AboutTextBlock'

import { Section, Wrapper } from './About.styles'

type Props = {}

const About: React.FC<Props> = () => {
  return (
    <Section id="About">
      <SectionTitle uppercase title="About" />
      <Wrapper>
        <AboutTextBlock />
      </Wrapper>
    </Section>
  )
}

export default About
