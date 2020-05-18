import React from 'react'
import { useFetchProjects } from '../../api/useFetchProjects'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import OneColumnGrid from '../../components/grids/OneColumnGrid'

import Card from '../../components/card/Card'
import ProjectDetails from '../../components/projectDetails/ProjectDetails'

import { Section } from './Projects.styles'

const Projects: React.FC = () => {
  const { state, dispatch } = useFetchProjects()
  const { projects, project, loading } = state

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />
      {!loading && (
        <>
          {!project ? (
            <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={120} padding={4}>
              {projects.map((project: any) => (
                <Card
                  key={project.id}
                  image={project.data.cover.url}
                  alt={project.data.alt}
                  select={() => dispatch({ type: 'SET_PROJECT', payload: project.id })}
                />
              ))}
            </OneColumnGrid>
          ) : (
            <>
              <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={120} padding={4}>
                <Card image={project.data.cover.url} alt={project.data.alt} />
                <ProjectDetails project={project} />
              </OneColumnGrid>
            </>
          )}
        </>
      )}
    </Section>
  )
}

export default Projects
