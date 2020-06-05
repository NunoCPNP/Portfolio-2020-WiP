import React from 'react'

import { Button } from './LinkButton.styles'

type Props = {
  ref: any
  type: 'submit'
  label: string
}

const LinkButton: React.FC<Props> = ({ label }) => {
  return (
    <Button>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{label}</span>
    </Button>
  )
}

export default LinkButton
