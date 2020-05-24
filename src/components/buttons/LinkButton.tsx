import React from 'react'

import { Container, Button } from './LinkButton.styles'

const LinkButton: React.FC = () => {
  return (
    <Container>
      <Button>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </Button>
    </Container>
  )
}

export default LinkButton
