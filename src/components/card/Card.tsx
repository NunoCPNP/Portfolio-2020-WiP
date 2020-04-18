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
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
      <Card>
        <img src={image} onClick={select} alt={alt} loading="lazy" />
      </Card>
    </motion.div>
  )
}

export default Cards
