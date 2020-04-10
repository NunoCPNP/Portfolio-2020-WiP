import React from 'react'

import { useSelector } from 'react-redux'
import { StoreInterface } from '../../store/interface'

import BlogButton from './BlogButton'

import { UList, StyledAnchor, StyledLink } from './MenuItems.styles'

const MenuItems: React.FC = () => {
  const completeMenu = useSelector((state: StoreInterface) => state.controllers.appControllers.completeMenu)

  return (
    <UList>
      <li className={completeMenu ? 'hidden' : ''}>
        <StyledLink to="/">Home</StyledLink>
      </li>
      <li className={completeMenu ? '' : 'hidden'}>
        <StyledAnchor href="#Home">Home</StyledAnchor>
      </li>
      <li className={completeMenu ? '' : 'hidden'}>
        <StyledAnchor href="#About">About</StyledAnchor>
      </li>
      <li className={completeMenu ? '' : 'hidden'}>
        <StyledAnchor href="#projects">Projects</StyledAnchor>
      </li>
      <li className={completeMenu ? '' : 'hidden'}>
        <StyledAnchor href="#contacts">Contacts</StyledAnchor>
      </li>
      <li>
        <BlogButton />
      </li>
    </UList>
  )
}

export default MenuItems
