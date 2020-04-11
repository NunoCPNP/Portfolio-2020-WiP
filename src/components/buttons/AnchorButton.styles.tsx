import styled from '../../themes/theme'

import { yellow, white, darkBlue } from '../../styles/colors'

export const StyledA = styled('a')`
  text-decoration: none;
  padding: 0.1rem 0.5rem;
  color: ${darkBlue};
  background-color: ${yellow};
  display: inline-block;
`

export const Container = styled('div')`
  display: flex;

  & img {
    width: 1rem;
  }
`
