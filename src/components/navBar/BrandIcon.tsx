import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BrandImage } from './BrandIcon.styles'
import Logo from '../../assets/logo.png'

type Props = {}

const BrandIcon: React.FC<Props> = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link to="/">
        <BrandImage src={Logo} alt="Logo" />
      </Link>
    </motion.div>
  )
}

export default BrandIcon
