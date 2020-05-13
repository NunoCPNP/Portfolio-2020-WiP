import React from 'react'
import { shallow } from 'enzyme'

import AboutTextBlock from './AboutTextBlock'
import { Wrapper } from './AboutTextBlock.styles'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AboutTextBlock {...setupProps} />)
}

describe('AboutTextBlock Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    expect(wrapper.type()).toEqual(Wrapper)
  })

  it('Have 3 paragraph tags', () => {
    const wrapper = setup()
    expect(wrapper.find('p').length).toBe(3)
  })
})
