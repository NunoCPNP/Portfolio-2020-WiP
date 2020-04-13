import React, { useEffect } from 'react'

//* Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { StoreInterface } from '../store/interface'
import { setControllers } from '../store/controllers/actions'

import NotFoundImage from '../assets/NotFound.svg'
import AnchorButton from '../components/buttons/AnchorButton'

import { Section, Container } from './NotFound.styles'

type Props = {}

const NotFound: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const controllers = useSelector((state: StoreInterface) => state.controllers)

  useEffect(() => {
    controllers.appControllers.completeMenu = false
    dispatch(setControllers({ ...controllers }))
    // eslint-disable-next-line
  }, [])

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
