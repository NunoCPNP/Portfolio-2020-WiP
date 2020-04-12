import styled from '../../themes/theme'

import { yellow, white, darkBlue } from '../../styles/colors'

export const FormWrapper = styled.div`
  & input {
    padding-left: 1rem;
    border: none;
    outline: none;
    background: none;
    color: ${white};
    width: 80%;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & input {
    font-size: 1.2rem;
  }

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

export const StyledDiv = styled.div`
  padding: 0.5rem 0;
  overflow: hidden;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid ${white};
  color: ${yellow};
`

export const StyledAlert = styled.div`
  margin-top: 2ren;
  color: ${yellow};
  text-align: center;
  border-bottom: 0.1rem solid transparent;
  padding: 0.4rem;
`
