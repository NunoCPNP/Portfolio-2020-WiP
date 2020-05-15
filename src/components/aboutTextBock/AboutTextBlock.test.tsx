import React from 'react'
import { shallow } from 'enzyme'

import AboutTextBlock from './AboutTextBlock'
import { Wrapper } from './AboutTextBlock.styles'

const setup = (props = {}) => {
  return shallow(<AboutTextBlock {...props} />)
}

describe('AboutTextBlock Component Tests: ', () => {
  let wrapper: any
  beforeEach(() => (wrapper = setup()))

  it('Renders without errors', () => {
    expect(wrapper.type()).toEqual(Wrapper)
  })

  it('Have 3 paragraph tags', () => {
    expect(wrapper.find('p').length).toBe(3)
  })
})
