import React from 'react'

import { StyledA, Container } from './AnchorButton.styles'

import GitHubLogo from '../../assets/ghlogo.svg'

type Props = {
  label: string
  icon?: string
  linkTo: string
}

const AnchorButton: React.FC<Props> = ({ label, icon, linkTo }) => {
  return (
    <StyledA
      href={linkTo}
      target="_blank"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.8, rotate: -10 }}
    >
      <Container>
        {icon === 'github' && <img src={GitHubLogo} alt="GitHub Profile" />}
        <div>{label.toUpperCase()}</div>
      </Container>
    </StyledA>
  )
}

export default AnchorButton
