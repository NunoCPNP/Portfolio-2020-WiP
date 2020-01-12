/* eslint no-undef: 0 */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr, storeFactor } from "../../tests/testUtils";

import BurgerIcon from "./BurgerIcon";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { value: true, action: () => {} };

const setup = (props = {}, initialState = {}) => {
  const store = storeFactor(initialState);
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BurgerIcon store={store} {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "burger-icon-component");
  expect(component.length).toBe(1);
});
