import React, { useContext, useEffect } from 'react'

import { controllersContext } from '../../context/controllers/context'

import CTA from '../../sections/CTA/CTA'
import About from '../../sections/about/About'
import Projects from '../../sections/projects/Projects'
import Contacts from '../../sections/contacts/Contacts'

const MainPage: React.FC = () => {
  const controllers = useContext(controllersContext)
  const { dispatch, state } = controllers

  useEffect(() => {
    if (!state.mainMenu) {
      dispatch({ type: 'SET_MENU_TRUE' })
    }
  }, []) // eslint-disable-line

  return (
    <>
      <CTA />
      <About />
      <Projects />
      <Contacts />
    </>
  )
}

export default MainPage
