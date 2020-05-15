import styled from '../../themes/theme'

import { Link } from 'react-router-dom'

import { yellow, white } from '../../styles/colors'

export const UList = styled('ul')`
  list-style: none;
  display: flex;
  align-items: center;
  padding-right: 3rem;

  .hidden {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const StyledAnchor = styled('a')`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: ${white};
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 0 1rem;
  font-weight: 600;

  &:hover {
    color: ${yellow};
  }
`
export const StyledLink = styled(Link)`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: ${white};
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 0 1rem;
  font-weight: 600;

  &:hover {
    color: ${yellow};
  }
`
