import React from 'react'

import { Wrapper, Container } from './OneColumnGrid.styles'

type Props = {
  items: number
  breakTo: number
  gap: number
  maxWidth: number
  padding: number
}

const ProjectsGrid: React.FC<Props> = ({ children, items, breakTo, gap, maxWidth, padding }) => {
  return (
    <Wrapper>
      <Container items={items} breakTo={breakTo} gap={gap} maxWidth={maxWidth} padding={padding}>
        {children}
      </Container>
    </Wrapper>
  )
}

export default ProjectsGrid
