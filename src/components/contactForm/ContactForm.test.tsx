import React from 'react'
import { shallow } from 'enzyme'

import ContactForm from './ContactForm'
import { FormWrapper, StyledDiv } from './ContactForm.styles'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ContactForm {...setupProps} />)
}

describe('ContactForm Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    expect(wrapper.type()).toEqual(FormWrapper)
  })

  it('Contains 1 form element', () => {
    const wrapper = setup()
    expect(wrapper.find('form').length).toBe(1)
  })

  it('Contains 4 label and 4 input elements wrapped on a StyledDiv', () => {
    const wrapper = setup()
    expect(wrapper.find(StyledDiv).length).toBe(4)
    expect(wrapper.find('label').length).toBe(4)
    expect(wrapper.find('input').length).toBe(4)
  })
})
