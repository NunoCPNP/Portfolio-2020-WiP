import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreInterface } from '../store/interface'

import CTA from '../sections/CTA/CTA'
import About from '../sections/About'
import Projects from '../sections/projects/Projects'
import Contacts from '../sections/Contacts'

import { setControllers } from '../store/controllers/actions'

type Props = {}

const MainPage: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const controllers = useSelector((state: StoreInterface) => state.controllers)

  useEffect(() => {
    controllers.appControllers.completeMenu = true
    dispatch(setControllers({ ...controllers }))
    // eslint-disable-next-line
  }, [])

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
