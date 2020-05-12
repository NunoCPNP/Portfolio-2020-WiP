import React from 'react'
import { shallow } from 'enzyme'

import AnchorButton from '../components/buttons/AnchorButton'

const defaultProps = {
  label: 'test label',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AnchorButton {...setupProps} />)
}

describe('AnchorButton', () => {
  it('Renders without errors', () => {
    setup()
  })
})
