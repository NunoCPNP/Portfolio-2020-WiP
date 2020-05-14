import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'
import { CardWrapper } from './Card.styles'

const initialProps = {
  image: 'test img',
  alt: 'alt test tag',
}

const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props }
  return shallow(<Card {...setupProps} />)
}

describe('Card Component Tests: ', () => {
  const select = jest.fn()

  it('Renders without errors', () => {
    const wrapper = setup()
    const target = wrapper.find(CardWrapper)
    expect(target.length).toBe(1)
  })

  it('Src and alt tags being applied from props', () => {
    const wrapper = setup()
    const target = wrapper.find('img')
    expect(target.find('[src="test img"]').length).toBe(1)
    expect(target.find('[alt="alt test tag"]').length).toBe(1)
  })

  it('Handles image click event if select prop is passed', () => {
    const wrapper = setup({ select })
    const target = wrapper.find('img')
    target.simulate('click')
    expect(select).toHaveBeenCalled()
  })
})
