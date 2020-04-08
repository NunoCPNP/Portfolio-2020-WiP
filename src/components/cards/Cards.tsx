import React from 'react'

import { Card, Cover } from './Cards.styles'

type Props = {
  cover: string
  click?: () => void
}

const Cards: React.FC<Props> = ({ cover, click }) => {
  return (
    <Card>
      <Cover
        onClick={click}
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
    </Card>
  )
}

export default Cards
