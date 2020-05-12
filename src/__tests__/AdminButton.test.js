import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'

import AdminButton from '../components/buttons/AdminButton'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AdminButton {...setupProps} />)
}

describe('AdminButton Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'AdminButton')
    expect(component.length).toBe(1)
  })
})
