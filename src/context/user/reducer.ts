import { StateInterface, ActionInterface } from './interfaces'

export const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      }

    case 'USER_LOGOUT':
      return {
        ...state,
        loggedIn: false,
        user: null,
      }

    default:
      return state
  }
}
