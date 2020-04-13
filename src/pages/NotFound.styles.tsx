import styled from '../themes/theme'

import { yellow, white } from '../styles/colors'

export const Section = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled('div')`
  text-align: center;
  text-transform: uppercase;

  h2 {
    font-size: 4rem;
    color: ${yellow};
  }

  h3 {
    font-size: 2rem;
    color: ${white};
  }

  img {
    margin: 3rem;
    height: 40rem;
  }
`
