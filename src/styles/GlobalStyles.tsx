import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap');

        *,
        *::after,
        *::before {
          margin: 0px;
          padding: 0px;
          box-sizing: inherit;
        }

        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }

        body {
          box-sizing: border-box;
          font-family: 'Exo 2', sans-serif;
        }
      `}
    />
  )
}

export default GlobalStyle
