import React from 'react'

import { Wrapper, Container } from './ProjectsGrid.styles'

type Props = {}

const ProjectsGrid: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default ProjectsGrid
