import styled from '../../themes/theme'

import { yellow, white, darkBlue } from '../../styles/colors'

export const FormWrapper = styled.div`
  & button {
    margin-top: 2rem;
    background: none;
    border: 1rem solid ${white};
    color: ${white};
    cursor: pointer;
    width: 100%;
    transition: all 300ms linear 0s;
    padding: 0.4rem;
  }

  & button:hover {
    color: ${darkBlue};
    background-color: ${yellow};
    border: 1px solid ${yellow};
  }
`

export const StyledAlert = styled.div`
  margin-top: 2ren;
  color: ${yellow};
  text-align: center;
  border-bottom: 0.1rem solid transparent;
  padding: 0.4rem;
`
