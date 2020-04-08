import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import ProjectsGrid from '../../components/grids/ProjectsGrid'

import { Section } from './Projects.styles'

type Props = {}

const Projects: React.FC<Props> = () => {
  return (
    <Section>
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />
      <ProjectsGrid />
    </Section>
  )
}

export default Projects
