import styled from '../../themes/theme'

import { yellow, white, darkBlue } from '../../styles/colors'

export const Wrapper = styled('div')`
  grid-column: 1 /4;
  display: flex;

  p {
    color: ${white};
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 1.6rem;
  }

  span {
    position: relative;
    text-shadow: 0px 2px 2px ${darkBlue};
    padding: 0 0.2rem;
    z-index: 1;
  }

  span::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    height: 1.1rem;
    width: 100%;
    background: ${yellow};
    z-index: -1;
    border-radius: 0.2rem;
  }
`
