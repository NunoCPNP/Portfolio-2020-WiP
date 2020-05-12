import React from 'react'
import { shallow, mount } from 'enzyme'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { findByTestAttr } from '../../test/testUtils'

import BlogBar from '../components/blogBar/BlogBar'
import reducer from '../store/controllers/reducers'

// const defaultProps = {}

// const setup = (props = {}) => {
//   const setupProps = { ...defaultProps, ...props }
//   return shallow(<BlogBar {...setupProps} />)
// }

describe('<Component /> unit test', () => {
  const mockStore = createStore(reducer, { users: { currentUser: null } })
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <BlogBar />
      </Provider>,
    )

  it('should add to count and display the correct # of counts', () => {
    const wrapper = getWrapper()
    // expect(wrapper.find('h3').text()).toEqual('Count: 0');
    // wrapper.find('button').simulate('click');
    // expect(wrapper.find('h3').text()).toEqual('Count: 1');
  })
})

// describe('Card Component Tests: ', () => {
//   it('Renders without errors', () => {
//     const wrapper = setup()
//     const component = findByTestAttr(wrapper, 'BlogBar')
//     expect(component.length).toBe(1)
//   })
// })
