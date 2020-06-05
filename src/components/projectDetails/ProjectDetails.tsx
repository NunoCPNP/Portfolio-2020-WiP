import React from 'react'
import { RichText } from 'prismic-reactjs'

import { Container, Buttons } from './ProjectDetails.styles'

type Props = {
  project: any
}

const ProjectDetails: React.FC<Props> = ({ project }) => {
  console.log('Project', project)

  return (
    <Container>
      <div className="content">
        <div>
          <div className="title">{RichText.render(project.data.project_name)}</div>
          <ul>
            {project.data.technologies.map((tech: any, index: number) => (
              <li key={index}>{tech.text}</li>
            ))}
          </ul>
          <div className="description">{RichText.render(project.data.description)}</div>
        </div>
        <Buttons>
          <button>Live Version</button>
          <button>GitHub URL</button>
        </Buttons>
      </div>
    </Container>
  )
}

export default ProjectDetails
