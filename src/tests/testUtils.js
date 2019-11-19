import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import rootReducer from '../store/rootReducer'

export const storeFactor = (initialState) => {
  return createStore(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
}
