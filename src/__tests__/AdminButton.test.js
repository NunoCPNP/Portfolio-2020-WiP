import React from 'react'
import { shallow } from 'enzyme'

import AdminButton from '../components/buttons/AdminButton'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AdminButton {...setupProps} />)
}

describe('AdminButton', () => {
  it('Renders without errors', () => {
    setup()
  })
})
