import React from 'react'
import { Global, css } from '@emotion/core'

import { gray75 } from './colors'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

        *,
        *::after,
        *::before {
          margin: 0px;
          padding: 0px;
          box-sizing: inherit;
        }

        html {
          font-size: 62.5%;
          overflow: hidden;
          scroll-behavior: smooth;
        }

        body {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
          background: ${gray75};
        }
      `}
    />
  )
}

export default GlobalStyle
