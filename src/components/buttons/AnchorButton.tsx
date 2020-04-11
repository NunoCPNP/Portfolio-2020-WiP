import React from 'react'

import { StyledA, Container } from './AnchorButton.styles'

type Props = {
  label: string
  icon: string
  linkTo: string
}

const AnchorButton: React.FC<Props> = ({ label, icon, linkTo }) => {
  return (
    <StyledA href={linkTo}>
      <Container>
        <div></div>
        <div>{label}</div>
      </Container>
    </StyledA>
  )
}

export default AnchorButton
