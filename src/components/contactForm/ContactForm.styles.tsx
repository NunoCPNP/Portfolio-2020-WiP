import styled from '../../themes/theme'

import { yellow, white } from '../../styles/colors'

export const FormWrapper = styled.div`
  & button {
    cursor: pointer;
    margin-top: 2rem;
    background: none;
    color: ${white};
    border: 0.1rem solid ${white};
    border-radius: 2rem;
    width: 100%;
    padding: 0.7rem;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`
export const StyledDiv = styled.div`
  padding: 0.5rem 0;
  overflow: hidden;
  font-size: 1.8rem;
  border-bottom: 0.1rem solid ${white};
  color: ${yellow};

  input {
    padding-left: 1rem;
    border: none;
    outline: none;
    background: none;
    color: ${white};
    width: 80%;
    font-size: 1.4rem;
  }
`
