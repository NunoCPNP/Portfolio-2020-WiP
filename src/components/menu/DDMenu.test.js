import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../util/testsFunctions';

import DDMenu from './DDMenu';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<DDMenu />);
  const component = findByTestAttr(wrapper, 'ddmenu-component');
  expect(component.length).toBe(1);
});
