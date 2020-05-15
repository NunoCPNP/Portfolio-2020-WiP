import React from 'react'
import { shallow } from 'enzyme'

import Loader from './Loader'
import { Section, Wrapper, Shadow, Box } from './Loader.styles'

const setup = (props = {}) => {
  return shallow(<Loader {...props} />)
}

describe('Loader Component Tests:', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    expect(wrapper.type()).toEqual(Section)
  })

  it('Renders all styled components', () => {
    const wrapper = setup()
    expect(wrapper.find(Wrapper).length).toBe(1)
    expect(wrapper.find(Shadow).length).toBe(1)
    expect(wrapper.find(Box).length).toBe(1)
  })
})
