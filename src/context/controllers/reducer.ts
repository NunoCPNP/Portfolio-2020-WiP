import { StateInterface, ActionInterface } from './interfaces'

export const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'SET_MENU_TRUE':
      return {
        ...state,
        mainMenu: true,
      }

    case 'SET_MENU_FALSE':
      return {
        ...state,
        mainMenu: false,
      }

    default:
      return state
  }
}
