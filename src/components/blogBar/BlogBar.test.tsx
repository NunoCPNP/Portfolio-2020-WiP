import React from 'react'
import { mount } from 'enzyme'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../store/controllers/reducers'

import BlogBar from './BlogBar'
import { BarWrapper, Button, StyledP } from './BlogBar.styles'

const setup = (props = {}, state: any = {}) => {
  const mockStore = createStore(reducer, state)

  return mount(
    <Provider store={mockStore}>
      <BlogBar {...props} />
    </Provider>,
  )
}

describe('BlogBar Component Tests:', () => {
  describe('No user logged in', () => {
    let wrapper: any

    beforeEach(() => {
      wrapper = setup({}, { users: { currentUser: null } })
    })

    it('Renders without errors', () => {
      expect(wrapper.find(BarWrapper).length).toBe(1)
    })

    it('If user is null shows login', () => {
      const target = wrapper.find(Button)
      expect(target.length).toBe(1)
      expect(target.text()).toBe('Login')
    })

    it('If user is null will not show logout', () => {
      const target = wrapper.find(StyledP)
      expect(target.length).toBe(0)
    })
  })

  describe('User logged in', () => {
    let wrapper: any

    beforeEach(() => {
      wrapper = setup({}, { users: { currentUser: { displayName: 'test user' } } })
    })

    it('If user is defined shows logout', () => {
      const target = wrapper.find(StyledP)
      expect(target.length).toBe(1)
    })

    it('If user is defined will not return login', () => {
      const target = wrapper.find(Button)
      expect(target.text()).not.toBe('Login')
    })

    it('If user is defined will display is name', () => {
      const target = wrapper.find(StyledP).find('span')
      expect(target.text()).toBe('test user')
    })
  })
})
