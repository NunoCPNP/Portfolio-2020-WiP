import styled from '../../themes/theme'

import { lightBlue } from '../../styles/colors'

export const StyledBar = styled('nav')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: 'blue';
  background-color: ${lightBlue};
`

export const NavBarBrand = styled('div')`
  padding: 0.5rem 0rem 0.5rem 3rem;
  align-self: center;
`

export const NavBarIcon = styled('div')`
  margin-right: 3rem;
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline;
  }
`
