import styled from '../../themes/theme'

import { darkBlue, yellow, white } from '../../styles/colors'

export const Container = styled('div')`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  color: ${white};

  .content {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 2.2rem;

      h1 {
        margin: 0rem;
      }
    }

    ul {
      list-style: none;
      display: flex;
      margin: 1rem 0rem 1.5rem 0rem;
      font-size: 1.8rem;
      font-weight: 700;
    }

    li {
      position: relative;
      display: block;
      z-index: 1;
      margin-right: 1rem;
      text-shadow: 0px 2px 2px ${darkBlue};
    }

    li::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0rem;
      left: 0;
      height: 1.1rem;
      width: 100%;
      background: ${yellow};
      border-radius: 0.2rem;
      z-index: -1;
    }

    .description {
      font-size: 1.8rem;
    }
  }
`

export const Buttons = styled('div')`
  display: flex;

  button {
    cursor: pointer;
    margin-top: 2rem;
    background: ${yellow};
    color: ${darkBlue};
    border: 0.1rem solid ${darkBlue};
    border-radius: 2rem;
    width: 100%;
    padding: 0.7rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`
