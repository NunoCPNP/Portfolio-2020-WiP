import React from 'react'
import { Wrapper, Shadow, Box } from './Loader.styles'

type Props = {}

const Loader: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Shadow />
      <Box />
    </Wrapper>
  )
}

export default Loader
