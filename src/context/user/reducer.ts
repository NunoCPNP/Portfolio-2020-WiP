import { StateInterface, ActionInterface } from './interfaces'

export const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        loggedIn: true,
        user: action.payload,
      }

    case 'USER_LOGOUT':
      return {
        loggedIn: false,
        user: null,
      }

    default:
      return state
  }
}
