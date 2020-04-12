import React from 'react'

import { Wrapper, Container } from './OneColumnGrid.styles'

type Props = {
  items: number
  breakTo: number
  maxWidth: number
}

const ProjectsGrid: React.FC<Props> = ({ children, items, breakTo, maxWidth }) => {
  return (
    <Wrapper>
      <Container items={items} breakTo={breakTo} maxWidth={maxWidth}>
        {children}
      </Container>
    </Wrapper>
  )
}

export default ProjectsGrid
