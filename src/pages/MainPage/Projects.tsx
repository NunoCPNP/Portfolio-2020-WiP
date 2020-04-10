import React, { useState, useRef } from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import ProjectsGrid from '../../components/grids/ProjectsGrid'
import Card from '../../components/card/Card'

import { projects } from '../../dev-data/projects'

import { Section } from './Projects.styles'

import useClickOutside from '../../hooks/useClickOutside'

type Props = {}

const Projects: React.FC<Props> = () => {
  const [project, setProject] = useState('')

  const reference = useRef<HTMLDivElement | null>(null)

  const handleSelection = (id: string) => setProject(id)
  const referenceHandler = () => setProject('')

  useClickOutside(reference, referenceHandler)

  const selectedProject = projects.filter((item: any) => item.id === project)
  console.log('SELECTED: ', selectedProject)

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />

      {project === '' ? (
        <ProjectsGrid>
          {projects.map((project: any) => (
            <Card key={project.id} select={() => handleSelection(project.id)} cover={project.cover} />
          ))}
        </ProjectsGrid>
      ) : (
        <ProjectsGrid>
          <div ref={reference}>
            <Card cover={selectedProject[0].cover} />
          </div>
        </ProjectsGrid>
      )}
    </Section>
  )
}

export default Projects
