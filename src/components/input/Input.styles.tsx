import styled from '../../themes/theme'

import { yellow, white } from '../../styles/colors'

export const StyledDiv = styled.div`
  padding: 0.5rem 0;
  overflow: hidden;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid ${white};
  color: ${yellow};
`

export const StyledInput = styled('input')`
  padding-left: 1rem;
  border: none;
  outline: none;
  background: none;
  color: ${white};
  width: 80%;
  font-size: 1.2rem;
`
