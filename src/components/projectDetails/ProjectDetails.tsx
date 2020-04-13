import React from 'react'

import { Container } from './ProjectDetails.styles'

type Props = {
  title: string
  description: string
  usedTechnology: string[]
  publicCode: boolean
  gitHubUrl: string
  publicUrl: boolean
  projectUrl: string
}

const ProjectDetails: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <div>{title}</div>
    </Container>
  )
}

export default ProjectDetails
