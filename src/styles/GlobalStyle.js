import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
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
          font-family: sans-serif;
          background: rgb(59, 59, 79);
        }
      `}
    />
  )
}

export default GlobalStyle
