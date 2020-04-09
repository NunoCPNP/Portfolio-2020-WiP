import React from 'react'
import { motion } from 'framer-motion'

import { Card, Cover } from './Cards.styles'

type Props = {
  cover: string
  click?: () => void
}

const Cards: React.FC<Props> = ({ cover, click }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card>
        <Cover
          onClick={click}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />
      </Card>
    </motion.div>
  )
}

export default Cards
