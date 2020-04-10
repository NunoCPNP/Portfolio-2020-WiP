import React, { useRef } from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import ProjectsGrid from '../../components/grids/ProjectsGrid'
import Card from '../../components/card/Card'

import useClickOutside from '../../hooks/useClickOutside'

import { projects } from '../../dev-data/projects'

import { Section } from './Projects.styles'

type Props = {}

const Projects: React.FC<Props> = () => {
  const reference = useRef<HTMLDivElement | null>(null)

  const selectionHandler = (id: string) => console.log(id)
  const referenceHandler = () => console.log('Clicked outside !')

  useClickOutside(reference, referenceHandler)

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />

      <ProjectsGrid>
        {projects.map((project: any) => (
          <div ref={reference} key={project.id}>
            <Card select={() => selectionHandler(project.id)} cover={project.cover} />
          </div>
        ))}
      </ProjectsGrid>
    </Section>
  )
}

export default Projects
