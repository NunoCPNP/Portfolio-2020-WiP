import React, { useState } from 'react'
import { useFetchProjects } from '../../api/useFetchProjects'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import OneColumnGrid from '../../components/grids/OneColumnGrid'

import Card from '../../components/card/Card'

import { Section } from './Projects.styles'

type Props = {}

const Projects: React.FC<Props> = () => {
  const [selectedProject, setSelectedProject] = useState<null | string>(null)

  const projects = useFetchProjects()

  const handleProjectSelection = (id: string) => setSelectedProject(id)

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />
      {projects && (
        <>
          {!selectedProject ? (
            <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={120} padding={4}>
              {projects.map((project: any) => (
                <Card
                  key={project.id}
                  image={project.data.cover.url}
                  alt={project.data.alt}
                  select={() => handleProjectSelection(project.id)}
                />
              ))}
            </OneColumnGrid>
          ) : (
            <></>
          )}
        </>
      )}
    </Section>
  )
}

export default Projects
