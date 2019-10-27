import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../util/testsFunctions';

import Header from './Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<Header />);
  const component = findByTestAttr(wrapper, 'header-component');
  expect(component.length).toBe(1);
});
