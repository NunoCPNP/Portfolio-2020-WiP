import styled from '../../themes/theme'

import { yellow, white, lightBlue } from '../../styles/colors'

export const StyledDiv = styled.div`
  padding: 1rem 0;
  overflow: hidden;
  font-size: 1.7rem;
  font-weight: 600;
  border-bottom: 0.1rem solid ${lightBlue};
  color: ${yellow};

  input {
    padding-left: 1.5rem;
    border: none;
    outline: none;
    background: none;
    color: ${white};
    width: 80%;
    font-size: 1.3rem;
  }
`

export const ButtonContainer = styled('div')`
  margin-top: 1.5rem;
`
