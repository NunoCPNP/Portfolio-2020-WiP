import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import { storeFactory } from './tests/testUtils'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<App store={store} />)
  console.log(wrapper.debug())
}

it('renders without crashing', () => {

})
