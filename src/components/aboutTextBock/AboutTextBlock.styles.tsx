import styled from '../../themes/theme'

export const Wrapper = styled('div')`
  display: flex;

  p {
    color: ${props => props.theme.colors.aboutText};
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 1.5rem;
  }

  span {
    text-shadow: 0px 2px 2px ${props => props.theme.colors.backgroundColor};
    letter-spacing: 1px;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 1rem),
      ${props => props.theme.colors.aboutTextAccent} calc(50% - 1rem),
      ${props => props.theme.colors.aboutTextAccent} 100%
    );
    background-size: 100% 200%;
    padding: 0 0.2rem;
  }
`
