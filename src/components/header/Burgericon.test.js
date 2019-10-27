/* eslint react/jsx-props-no-spreading: 0 */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../../util/testsFunctions';

import BurgerIcon from './BurgerIcon';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { value: true, action: () => {} };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BurgerIcon {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'burger-icon-component');
  expect(component.length).toBe(1);
});

test('does not throw warning on value propType', () => {
  const expectedProps = { value: true, action: () => {} };
  checkProps(BurgerIcon, expectedProps);
});

test('does not throw warning on action propType', () => {
  const expectedProps = { value: true, action: () => {} };
  checkProps(BurgerIcon, expectedProps);
});
