import React from 'react'

import { StyledDiv, StyledInput } from './Input.styles'

type Props = {
  id: string
  label: string
  type: string
  placeholder: string
  onChange?: any
}

const Input: Props = ({ label, id, type, placeholder, ref, onChange }) => {
  return (
    <StyledDiv>
      <label htmlFor={id}>{label}</label>
      <StyledInput ref={ref} onChange={onChange} id={id} type={type} placeholder={placeholder} />
    </StyledDiv>
  )
}

export default Input
