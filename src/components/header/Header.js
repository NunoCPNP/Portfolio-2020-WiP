import React, { useState } from 'react'
import styled from '@emotion/styled'

import BrandIcon from './BrandIcon'
import BurgerIcon from './BurgerIcon'
import MenuItem from './MenuItems'

import { below } from '../../styles'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledBar data-test='header-component'>
      <NavBarBrand>
        <BrandIcon />
      </NavBarBrand>
      <MenuItem />
      <NavBarIcon>
        <BurgerIcon action={() => setToggle(!toggle)} value={toggle} />
      </NavBarIcon>
    </StyledBar>
  )
};

export default Header

const StyledBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(38, 37, 51);
`

const NavBarBrand = styled.div`
  padding-left: 3rem;
  padding-top: 0.5rem;
  align-self: center;
`

const NavBarIcon = styled.div`
  margin-right: 3rem;
  display: none;

  ${below.m`
    display: inline;
  `}
`
