import React, { useState } from 'react'

import BrandIcon from '../../components/brandIcon/BrandIcon'
import BurgerIcon from '../../components/burgerIcon/BurgerIcon'
import MenuItems from '../../components/menuItem/MenuItems'

import { StyledBar, NavBarBrand, NavBarIcon } from './NavBar.styles'

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledBar>
      <NavBarBrand>
        <BrandIcon />
      </NavBarBrand>
      <MenuItems />
      <NavBarIcon>
        <BurgerIcon action={() => setToggle(!toggle)} value={toggle} />
      </NavBarIcon>
    </StyledBar>
  )
}

export default Header
