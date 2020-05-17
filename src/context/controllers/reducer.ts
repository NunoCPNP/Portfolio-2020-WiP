import { StateInterface, ActionInterface } from './interfaces'

export const reducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        mainMenu: !state.mainMenu,
      }

    default:
      return state
  }
}
