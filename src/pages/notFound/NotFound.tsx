import React, { useContext, useEffect } from 'react'

import { controllersContext } from '../../context/controllers/context'

import NotFoundImage from '../../assets/NotFound.svg'

import { Section, Container } from './NotFound.styles'

const NotFound: React.FC = () => {
  const controllers = useContext(controllersContext)
  const { dispatch } = controllers

  useEffect(() => {
    dispatch({ type: 'SET_MENU_FALSE' })
  }, []) // eslint-disable-line

  return (
    <Section>
      <Container>
        <h2>Page not found</h2>
        <h3>The page you requested could not be found</h3>
        <img src={NotFoundImage} alt="Page not found" />
      </Container>
    </Section>
  )
}

export default NotFound
