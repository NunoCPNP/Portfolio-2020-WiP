import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { storeFactor } from "./tests/testUtils";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
  const store = storeFactor(initialState);
  const wrapper = shallow(<App store={store} />);
  console.log(wrapper.debug());
};

it("renders without crashing", () => {});
