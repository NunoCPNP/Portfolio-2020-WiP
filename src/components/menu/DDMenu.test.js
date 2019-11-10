import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { findByTestAttr, storeFactor } from '../../tests/testUtils'

import DDMenu from './DDMenu'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (initialState = {}) => {
  const store = storeFactor(initialState)
  return shallow(<DDMenu store={store} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'ddmenu-component')
  expect(component.length).toBe(1)
})
