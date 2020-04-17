import styled from '../../themes/theme'

export const Card = styled('div')`
  position: relative;
  z-index: 1;
  width: 100%;
  padding-bottom: 150%;
  perspective: 100rem;

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background: rgba(#000000, 0.5);
    box-shadow: 0 6px 12px 12px rgba($c_0, 0.4);
  }
`

export const Cover = styled('div')`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-size: cover;
  perspective-origin: 50% 50%;
  border-radius: 0.5rem;

  &::after {
    display: block;
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(
      226deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.4) 35%,
      rgba(255, 255, 255, 0.2) 42%,
      rgba(255, 255, 255, 0) 60%
    );
  }
`
