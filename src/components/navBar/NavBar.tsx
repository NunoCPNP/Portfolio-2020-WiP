import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import BrandIcon from './BrandIcon'
import BurgerIcon from './BurgerIcon'
import CompleteMenuItems from './CompleteMenuItems'
import ShortMenuItems from './ShortMenuItems'

import { StyledBar, NavBarBrand, NavBarIcon } from './NavBar.styles'
import { StoreInterface } from '../../store/interface'

type Props = {}

const Header: React.FC<Props> = () => {
  const [toggle, setToggle] = useState(false)

  const completeMenu = useSelector((state: StoreInterface) => state.controllers.appControllers.completeMenu)

  return (
    <StyledBar>
      <NavBarBrand>
        <BrandIcon />
      </NavBarBrand>
      {completeMenu ? <CompleteMenuItems /> : <ShortMenuItems />}
      <NavBarIcon>
        <BurgerIcon action={() => setToggle(!toggle)} value={toggle} />
      </NavBarIcon>
    </StyledBar>
  )
}

export default Header
