import React from 'react'
import { motion } from 'framer-motion'

import { CardWrapper } from './Card.styles'

type Props = {
  image: string
  alt: string
  select?: (arg: any) => void
}

const Card: React.FC<Props> = ({ image, alt, select }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
      <CardWrapper>
        <img loading="lazy" src={image} onClick={select} alt={alt} />
      </CardWrapper>
    </motion.div>
  )
}

export default Card
