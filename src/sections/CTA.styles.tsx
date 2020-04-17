import styled from '../themes/theme'

import { yellow } from '../styles/colors'

export const SectionWrapper = styled('section')`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  & img {
    grid-row: 1 / 13;
    grid-column: 1 / 11;
  }
`

export const CTAText = styled('div')`
  grid-row: 5 / 12;
  grid-column: 6 / 13;
  align-self: center;
  text-align: right;
  color: white;
  padding-right: 3rem;

  h2 {
    font-size: 2rem;

    span {
      color: ${yellow};
      font-size: 7rem;
      font-weight: 700;
      padding-left: 1rem;
    }
  }

  h3 {
    font-size: 3rem;

    span {
      font-size: 2.5rem;
    }
  }
`
export const ButtonsContainer = styled('div')`
  padding-top: 1.5rem;
`
