import React, { useContext } from 'react'

import { controllersContext } from '../../context/controllers/context'

import BlogButton from '../buttons/BlogButton'

import { UList, StyledAnchor, StyledLink } from './MenuItems.styles'

const MenuItems: React.FC = () => {
  const controllers = useContext(controllersContext)
  const { mainMenu } = controllers.state

  return (
    <UList>
      <li className={mainMenu ? 'hidden' : ''}>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li className={mainMenu ? '' : 'hidden'}>
        <StyledAnchor href="#Home">Home</StyledAnchor>
      </li>
      <li className={mainMenu ? '' : 'hidden'}>
        <StyledAnchor href="#About">About</StyledAnchor>
      </li>
      <li className={mainMenu ? '' : 'hidden'}>
        <StyledAnchor href="#Projects">Projects</StyledAnchor>
      </li>
      <li className={mainMenu ? '' : 'hidden'}>
        <StyledAnchor href="#Contacts">Contacts</StyledAnchor>
      </li>
      <li>
        <BlogButton />
      </li>
    </UList>
  )
}

export default MenuItems
