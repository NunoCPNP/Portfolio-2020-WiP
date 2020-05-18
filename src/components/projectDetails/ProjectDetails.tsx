import React from 'react'
import { RichText } from 'prismic-reactjs'

import { Container } from './ProjectDetails.styles'

type Props = {
  project: any
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
  console.log('Project', project)

  return (
    <Container>
      <div className="content">
        <div className="title">{RichText.render(project.data.project_name)}</div>
        <ul>
          {project.data.technologies.map((tech: any, index: number) => (
            <li key={index}>{tech.text}</li>
          ))}
        </ul>
        <div className="description">{RichText.render(project.data.description)}</div>
      </div>
    </Container>
  )
}

export default ProjectDetails
