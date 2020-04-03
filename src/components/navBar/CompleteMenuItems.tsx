import React from 'react'
import { motion } from 'framer-motion'

import BlogButton from './BlogButton'

import { UList, StyledAnchor } from './CompleteMenuItems.styles'

const CompleteMenuItems: React.FC = () => {
  const animContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const animItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <UList variants={animContainer} initial="hidden" animate="visible">
      <motion.li className="item" variants={animItem}>
        <StyledAnchor href="#Home">Home</StyledAnchor>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledAnchor href="#About">About</StyledAnchor>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledAnchor href="#projects">Projects</StyledAnchor>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledAnchor href="#contacts">Contacts</StyledAnchor>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <BlogButton />
      </motion.li>
    </UList>
  )
}

export default CompleteMenuItems
