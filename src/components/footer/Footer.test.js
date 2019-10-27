import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../util/testsFunctions';

import Footer from './Footer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<Footer />);
  const component = findByTestAttr(wrapper, 'footer-component');
  expect(component.length).toBe(1);
});
