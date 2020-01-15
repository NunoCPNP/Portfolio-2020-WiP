/* eslint no-undef: 0 */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, storeFactor } from '../../tests/testUtils';

import Button from './Button';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { value: true, action: () => {} };

const setup = (props: {}, initialState = {}) => {
  const store = storeFactor(initialState);
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Button store={store} {...setupProps} />);
};

test('If type = login renders without error', () => {
  const wrapper = setup({ type: 'login' });
  const component = findByTestAttr(wrapper, 'button-component');
  expect(component.length).toBe(1);
});

test('If type = logout renders without error', () => {
  const wrapper = setup({ type: 'logout' });
  const component = findByTestAttr(wrapper, 'button-component');
  expect(component.length).toBe(1);
});

test("If invalid type doesn't render", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'button-component');
  expect(component.length).toBe(0);
});
