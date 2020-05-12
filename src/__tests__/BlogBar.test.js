import React from 'react'
import { shallow, mount } from 'enzyme'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { findByTestAttr } from '../../test/testUtils'

import BlogBar from '../components/blogBar/BlogBar'
import reducer from '../store/controllers/reducers'

const defaultProps = {}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  const mockStore = createStore(reducer, { users: { currentUser: null } })

  return mount(
    <Provider store={mockStore}>
      <BlogBar {...setupProps} />
    </Provider>,
  )
}

describe('BlogBar Component Tests:', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'BlogBar')
    expect(component.length).toBe(1)
  })
})
