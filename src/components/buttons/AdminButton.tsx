import React from 'react'

import { StyledButton } from './AdminButton.styles'

type Props = {
  label: string
  handleClick: () => void
}

const AdminButton: React.FC<Props> = ({ label, handleClick }) => {
  return <StyledButton onClick={handleClick}>{label}</StyledButton>
}

export default AdminButton
