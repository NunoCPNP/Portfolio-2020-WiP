import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import AboutTextBlock from '../../components/aboutTextBock/AboutTextBlock'
import OneColumnGrid from '../../components/grids/OneColumnGrid'

import { Section } from './About.styles'

type Props = {}

const About: React.FC<Props> = () => {
  return (
    <Section id="About">
      <SectionTitle uppercase title="About" />
      <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={140} padding={4}>
        <AboutTextBlock />
      </OneColumnGrid>
    </Section>
  )
}

export default About
