import React from 'react'
import { motion } from 'framer-motion'
import { StyledLink } from './BlogButton.styles'

type Props = {}

const BlogButton: React.FC<Props> = () => {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.8, rotate: -10 }}>
      <StyledLink to="/blog">Blog</StyledLink>
    </motion.div>
  )
}

export default BlogButton
