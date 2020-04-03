import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { darkBlue, yellow } from '../../styles/colors'

export const StyledLink = styled(Link)`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  font-size: 1.06rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.2rem 1rem;
  background-color: ${yellow};
  color: ${darkBlue};
  border-radius: 1rem;
  margin-left: 1rem;
`
