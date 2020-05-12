import React from 'react'
import { shallow } from 'enzyme'

import Card from '../components/card/Card'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Card {...setupProps} />)
}

describe('Card', () => {
  it('Renders without errors', () => {
    setup()
  })
})
