import styled from '../../themes/theme'

import { yellow, white, darkBlue } from '../../styles/colors'

export const Wrapper = styled('div')`
  display: grid;
  padding: 0 3rem;

  & h2 {
    color: ${white};
    font-size: 1.8rem;
    text-shadow: 0px 2px 2px ${darkBlue};
    letter-spacing: 1px;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 1.2rem),
      ${yellow} calc(50% - 1.2rem),
      ${yellow} 100%
    );
    background-size: 100% 200%;
    background-position: 0 0;
    padding: 0 0.5rem;
  }

  & h4 {
    color: ${white};
    font-size: 1.4rem;
    padding-top: 0.4rem;
    padding-left: 0.5rem;
  }
`
