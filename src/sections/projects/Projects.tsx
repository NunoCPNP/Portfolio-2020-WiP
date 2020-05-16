import React from 'react'
import { useFetchProjects } from '../../api/useFetchProjects'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import OneColumnGrid from '../../components/grids/OneColumnGrid'

import Card from '../../components/card/Card'

import { Section } from './Projects.styles'

type Props = {}

const Projects: React.FC<Props> = () => {
  const { state, dispatch } = useFetchProjects()

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />
      {state.projects && (
        <>
          {!state.project ? (
            <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={120} padding={4}>
              {state.projects.map((project: any) => (
                <Card
                  key={project.id}
                  image={project.data.cover.url}
                  alt={project.data.alt}
                  select={() => dispatch({ type: 'SET_PROJECT', payload: project.id })}
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
