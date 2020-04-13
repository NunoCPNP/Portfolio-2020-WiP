import styled from '../../themes/theme'
import { motion } from 'framer-motion'

import { yellow, darkBlue } from '../../styles/colors'

export const StyledA = styled(motion.a)`
  display: inline-block;
  text-decoration: none;
  padding: 0.2rem 1rem;
  color: ${darkBlue};
  font-size: 1.2rem;
  font-weight: 600;
  background-color: ${yellow};
  border-radius: 1rem;
`

export const Container = styled('div')`
  display: flex;
  align-items: center;

  & img {
    width: 1.2rem;
    margin-right: 0.5rem;
  }
`
