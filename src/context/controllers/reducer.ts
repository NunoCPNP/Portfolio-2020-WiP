import { StateInterface, ActionInterface } from './interfaces'

export const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        mainMenu: !state.mainMenu,
      }

    case 'SET_MENU':
      return {
        ...state,
        mainMenu: true,
      }

    default:
      return state
  }
}
