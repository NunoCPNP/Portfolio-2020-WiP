import React, { useState, useRef } from 'react'

import SectionTitle from '../components/sectionTitle/SectionTitle'
import OneColumnGrid from '../components/grids/OneColumnGrid'
import ProjectDetails from '../components/projectDetails/ProjectDetails'
import Card from '../components/card/Card'

import { projects } from '../dev-data/projects'

import { Section } from './Projects.styles'

import useClickOutside from '../hooks/useClickOutside'

type Props = {}

const Projects: React.FC<Props> = () => {
  const [project, setProject] = useState('')

  const reference = useRef<HTMLDivElement | null>(null)

  const handleSelection = (id: string) => setProject(id)
  const referenceHandler = () => setProject('')

  useClickOutside(reference, referenceHandler)

  const selectedProject = projects.filter((item: any) => item.id === project)

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />

      {project === '' ? (
        <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={120} padding={4}>
          {projects.map((project: any) => (
            <Card
              key={project.id}
              select={() => handleSelection(project.id)}
              image={project.cover}
              alt={project.title}
            />
          ))}
        </OneColumnGrid>
      ) : (
        <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={120} padding={4}>
          <div ref={reference}>
            <Card image={selectedProject[0].cover} alt={selectedProject[0].title} />
          </div>
          <ProjectDetails
            title={selectedProject[0].title}
            description={selectedProject[0].description}
            usedTechnology={selectedProject[0].usedTechnology}
            publicCode={selectedProject[0].publicCode}
            gitHubUrl={selectedProject[0].gitHubUrl}
            publicUrl={selectedProject[0].publicUrl}
            projectUrl={selectedProject[0].projectUrl}
          />
        </OneColumnGrid>
      )}
    </Section>
  )
}

export default Projects
