import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import Logo from '../../assets/logo.png'

const BrandIcon = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <BrandImage src={Logo} alt='Logo' />
    </motion.div>
  )
}

export default BrandIcon

const BrandImage = styled.img`
  width: 40px;
`
