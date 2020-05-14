import React from 'react'
import { Burger } from './BurgerIcon.styles'

type Props = {
  value: boolean
  action: () => void
}

const BurgerIcon: React.FC<Props> = ({ action, value }) => {
  return (
    <Burger>
      <div
        role="navigation"
        onClick={action}
        className={value ? 'burger burger-squeeze open' : 'burger burger-squeeze'}
      >
        <div className="burger-lines" />
      </div>
    </Burger>
  )
}

export default BurgerIcon
