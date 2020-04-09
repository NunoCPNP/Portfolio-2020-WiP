import React from 'react'

import BlogButton from './BlogButton'

import { UList, StyledAnchor } from './MenuItems.styles'

const CompleteMenuItems: React.FC = () => {
  return (
    <UList>
      <li className="item">
        <StyledAnchor href="#Home">Home</StyledAnchor>
      </li>
      <li className="item">
        <StyledAnchor href="#About">About</StyledAnchor>
      </li>
      <li className="item">
        <StyledAnchor href="#projects">Projects</StyledAnchor>
      </li>
      <li className="item">
        <StyledAnchor href="#contacts">Contacts</StyledAnchor>
      </li>
      <li className="item">
        <BlogButton />
      </li>
    </UList>
  )
}

export default CompleteMenuItems
