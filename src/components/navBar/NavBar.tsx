import React, { useState } from 'react'

import BrandIcon from './BrandIcon'
import BurgerIcon from './BurgerIcon'
import CompleteMenuItems from './MenuItems'

import { StyledBar, NavBarBrand, NavBarIcon } from './NavBar.styles'

type Props = {}

const Header: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledBar>
      <NavBarBrand>
        <BrandIcon />
      </NavBarBrand>
      <CompleteMenuItems />
      <NavBarIcon>
        <BurgerIcon action={() => setToggle(!toggle)} value={toggle} />
      </NavBarIcon>
    </StyledBar>
  )
}

export default Header
