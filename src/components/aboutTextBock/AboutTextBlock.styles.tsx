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
    text-shadow: 0px 2px 2px ${darkBlue};
    letter-spacing: 1px;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 0.7rem),
      ${yellow} calc(50% - 0.7rem),
      ${yellow} 100%
    );
    background-size: 100% 200%;
    padding: 0 0.2rem;
  }
`
