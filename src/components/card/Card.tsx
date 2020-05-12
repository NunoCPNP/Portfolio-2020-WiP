import React from 'react'
import { motion } from 'framer-motion'

import { Card } from './Card.styles'

type Props = {
  image: string
  alt: string
  select?: () => void
}

const Cards: React.FC<Props> = ({ image, alt, select }) => {
  return (
    <motion.div data-test="Card" whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
      <Card>
        <img loading="lazy" src={image} onClick={select} alt={alt} />
      </Card>
    </motion.div>
  )
}

export default Cards
