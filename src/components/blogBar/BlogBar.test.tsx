import React from 'react'
import { mount } from 'enzyme'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../../store/controllers/reducers'

import BlogBar from './BlogBar'
import { BarWrapper, Button, StyledP } from './BlogBar.styles'

const defaultProps = {}

const setup = (props = {}, state: any = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const mockStore = createStore(reducer, state)

  return mount(
    <Provider store={mockStore}>
      <BlogBar {...setupProps} />
    </Provider>,
  )
}

describe('BlogBar Component Tests:', () => {
  it('Renders without errors', () => {
    const wrapper = setup({}, { users: { currentUser: null } })
    expect(wrapper.find(BarWrapper).length).toBe(1)
  })

  it('If user is null shows login', () => {
    const wrapper = setup({}, { users: { currentUser: null } })
    const target = wrapper.find(Button)
    expect(target.length).toBe(1)
    expect(target.text()).toBe('Login')
  })

  it('If user is null will not show logout', () => {
    const wrapper = setup({}, { users: { currentUser: null } })
    const target = wrapper.find(StyledP)
    expect(target.length).toBe(0)
  })

  it('If user is defined shows logout', () => {
    const wrapper = setup({}, { users: { currentUser: { displayName: 'test user' } } })
    const target = wrapper.find(StyledP)
    expect(target.length).toBe(1)
  })

  it('If user is defined will not return login', () => {
    const wrapper = setup({}, { users: { currentUser: { displayName: 'test user' } } })
    const target = wrapper.find(Button)
    expect(target.text()).not.toBe('Login')
  })

  it('If user is defined will display is name', () => {
    const wrapper = setup({}, { users: { currentUser: { displayName: 'test user' } } })
    const target = wrapper.find(StyledP).find('span')
    expect(target.text()).toBe('test user')
  })
})
