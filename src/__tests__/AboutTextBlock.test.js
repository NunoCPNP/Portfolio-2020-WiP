import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'

import AboutTextBlock from '../components/aboutTextBock/AboutTextBlock'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AboutTextBlock {...setupProps} />)
}

describe('AboutTextBlock Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'AboutTextBlock')
    expect(component.length).toBe(1)
  })

  it('Have 3 paragraph tags', () => {
    const wrapper = setup()
    expect(wrapper.find('p').length).toBe(3)
  })
})
