import React from 'react'

import { Wrapper, Container } from './Toast.styles'

import closeAction from '../../assets/close.svg'

type Props = {
  type: string
  message: string
}

const Notifications: React.FC<Props> = ({ message, type }) => {
  return (
    <Wrapper type={type}>
      <Container>
        <p>{message}</p>
        <img src={closeAction} alt="Close" />
      </Container>
    </Wrapper>
  )
}

export default Notifications
