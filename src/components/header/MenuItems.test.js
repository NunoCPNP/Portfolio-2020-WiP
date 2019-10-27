import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../util/testsFunctions';

import MenuItems from './MenuItems';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<MenuItems />);
  const component = findByTestAttr(wrapper, 'menu-items-component');
  expect(component.length).toBe(1);
});
