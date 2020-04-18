import React from 'react'
import { Section, Wrapper, Shadow, Box } from './Loader.styles'

type Props = {}

const Loader: React.FC<Props> = () => {
  return (
    <Section>
      <Wrapper>
        <Shadow />
        <Box />
      </Wrapper>
    </Section>
  )
}

export default Loader
