import { css } from '@emotion/core'

const size = {
  xxs: 320,
  xs: 480,
  s: 600,
  m: 768,
  l: 900,
  xl: 1024,
  xxl: 1200
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})
