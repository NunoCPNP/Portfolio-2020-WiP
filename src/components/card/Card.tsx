import React from 'react'
import { motion } from 'framer-motion'

import { Card, Cover } from './Card.styles'

type Props = {
  cover: string
  select?: () => void
}

const Cards: React.FC<Props> = ({ cover, select }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Card>
        <Cover
          onClick={select}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />
      </Card>
    </motion.div>
  )
}

export default Cards
