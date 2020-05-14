import React from 'react'
import { shallow } from 'enzyme'

import AdminButton from './AdminButton'
import { StyledButton } from './AdminButton.styles'

const initialProps = {
  label: 'test label',
  handleClick: () => null,
}

const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props }
  return shallow(<AdminButton {...setupProps} />)
}

describe('AdminButton Component Tests: ', () => {
  const handleClick = jest.fn()

  it('Renders without errors', () => {
    const wrapper = setup()
    expect(wrapper.type()).toEqual(StyledButton)
  })

  it('Shows label prop at button label', () => {
    const wrapper = setup()
    const target = wrapper.find(StyledButton)
    expect(target.text()).toBe('test label')
  })

  it('Handles button click event', () => {
    const wrapper = setup({ handleClick })
    const target = wrapper.find(StyledButton)
    target.simulate('click')
    expect(handleClick).toHaveBeenCalled()
  })
})
