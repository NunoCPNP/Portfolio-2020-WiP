import React from 'react'

import { StyledA, Container } from './AnchorButton.styles'

import GitHubLogo from '../../assets/ghlogo.svg'

type Props = {
  label: string
  icon: string
  linkTo: string
}

const AnchorButton: React.FC<Props> = ({ label, icon, linkTo }) => {
  return (
    <StyledA href={linkTo} target="_blank">
      <Container>
        {icon === 'github' && <img src={GitHubLogo} />}
        <div>{label}</div>
      </Container>
    </StyledA>
  )
}

export default AnchorButton
