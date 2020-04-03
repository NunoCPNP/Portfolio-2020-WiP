import React from 'react'

import { Card } from './Cards.styles'

type Props = {
  cover: string
  click?: () => void
}

const Cards: React.FC<Props> = ({ cover, click }) => {
  return (
    <Card>
      <div
        onClick={click}
        className="cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
    </Card>
  )
}

export default Cards
