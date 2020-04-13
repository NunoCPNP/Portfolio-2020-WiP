import { ControllersActionTypes } from './types'
import { ActionInterface } from './interface'
import { INITIAL_STATE } from './initialState'

const controllersHandler = (state = INITIAL_STATE, action: ActionInterface) => {
  const { type, payload } = action

  switch (type) {
    case ControllersActionTypes.SET_CONTROLLERS:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}

export default controllersHandler
