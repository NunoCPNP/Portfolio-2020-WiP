import React from 'react'
import { shallow } from 'enzyme'

import OneColumnGrid from './OneColumnGrid'
import { Wrapper, Container } from './OneColumnGrid.styles'

const initialProps = {
  items: 4,
  breakTo: 2,
  gap: 4,
  maxWidth: 120,
  padding: 4,
}

const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props }
  return shallow(<OneColumnGrid {...setupProps} />)
}

describe('OneColumnGrid Component Tests:', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = setup()
  })

  it('Renders whithout errors', () => {
    expect(wrapper.type()).toEqual(Wrapper)
  })

  it('Renders one container element', () => {
    const target = wrapper.find(Container)
    expect(target.length).toBe(1)
  })

  it('Recieving proper props', () => {
    const target = wrapper.find(Container)
    expect(target.props()).toEqual({
      items: 4,
      breakTo: 2,
      gap: 4,
      maxWidth: 120,
      padding: 4,
    })
  })
})
