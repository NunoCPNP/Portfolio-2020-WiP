import React from 'react'
import { shallow } from 'enzyme'

import BurgerIcon from './BurgerIcon'
import { Burger } from './BurgerIcon.styles'

const setup = (props = {}) => {
  return shallow(<BurgerIcon {...props} />)
}

describe('BurgerIcon Component Tests:', () => {
  let wrapper: any

  describe('Value props as true', () => {
    const action = jest.fn()

    beforeEach(() => {
      wrapper = setup({ value: true, action })
    })

    it('Renders without errors', () => {
      expect(wrapper.type()).toEqual(Burger)
    })

    it('Renders two divs', () => {
      expect(wrapper.find('div').length).toBe(2)
    })

    it('Renders a div with "burger burger-squeeze open" classNames', () => {
      const target = wrapper.find('div')
      expect(target.find('[className="burger burger-squeeze open"]').length).toBe(1)
    })

    it('Doesnt render a div with "burger burger-squeeze" classNames', () => {
      const target = wrapper.find('div')
      expect(target.find('[className="burger burger-squeeze"]').length).toBe(0)
    })

    it('Renders a div with "burger-lines" className', () => {
      const target = wrapper.find('div')
      expect(target.find('[className="burger-lines"]').length).toBe(1)
    })

    it('Fires action function on click', () => {
      const target = wrapper.find('[role="navigation"]')
      target.simulate('click')
      expect(action).toHaveBeenCalled()
    })
  })

  describe('Value prop as false', () => {
    const action = jest.fn()

    beforeEach(() => {
      wrapper = setup({ value: false, action })
    })

    it('Renders without errors', () => {
      expect(wrapper.type()).toEqual(Burger)
    })

    it('Renders two divs', () => {
      expect(wrapper.find('div').length).toBe(2)
    })

    it('Renders a div with "burger burger-squeeze" classNames', () => {
      const target = wrapper.find('div')
      expect(target.find('[className="burger burger-squeeze"]').length).toBe(1)
    })

    it('Doesnt render a div with "burger burger-squeeze open" classNames', () => {
      const target = wrapper.find('div')
      expect(target.find('[className="burger burger-squeeze open"]').length).toBe(0)
    })

    it('Renders a div with "burger-lines" className', () => {
      const target = wrapper.find('div')
      expect(target.find('[className="burger-lines"]').length).toBe(1)
    })

    it('Fires action function on click', () => {
      const target = wrapper.find('[role="navigation"]')
      target.simulate('click')
      expect(action).toHaveBeenCalled()
    })
  })
})
