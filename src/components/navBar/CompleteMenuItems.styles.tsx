import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { yellow } from '../../styles/colors'

export const UList = styled(motion.ul)`
  list-style: none;
  display: flex;
  align-items: center;
  padding-right: 3rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
export const StyledAnchor = styled('a')`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0 1rem;
  font-weight: 500;

  &.blog {
    background-color: 'yellow';
    color: 'blue';
    border-radius: 1rem;
    margin-left: 1rem;
  }

  &:hover {
    color: ${yellow};
  }
`
