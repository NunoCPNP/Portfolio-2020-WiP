import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreInterface } from '../store/interface'

import CTA from './MainPage/CTA'
import About from './MainPage/About'
import Projects from './MainPage/Projects'
import Contacts from './MainPage/Contacts'

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
