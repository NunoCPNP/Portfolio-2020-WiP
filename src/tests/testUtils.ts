import { createStore } from "redux";

import rootReducer from "../store/rootReducer";

export const storeFactor = (initialState: any) => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper: any, val: any) => {
  return wrapper.find(`[data-test="${val}"]`);
};
