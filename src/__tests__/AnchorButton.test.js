import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'

import AnchorButton from '../components/buttons/AnchorButton'

const defaultProps = {
  label: 'test label',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AnchorButton {...setupProps} />)
}

describe('AnchorButton Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'AnchorButton')
    expect(component.length).toBe(1)
  })
})
