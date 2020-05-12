import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'

import Card from '../components/card/Card'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Card {...setupProps} />)
}

describe('Card Component Tests:', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'Card')
    expect(component.text()).toBe(1)
  })
})
