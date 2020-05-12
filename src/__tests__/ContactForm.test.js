import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'

import ContactForm from '../components/contactForm/ContactForm'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ContactForm {...setupProps} />)
}

describe('ContactForm Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'ContactForm')
    expect(component.length).toBe(1)
  })
})
