import { UserActionTypes } from './types'
import { ActionInterface } from './interface'
import { INITIAL_STATE } from './initialState'

const userHandler = (state = INITIAL_STATE, action: ActionInterface) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default userHandler
