export interface StateInterface {
  darkMode: boolean
  mainMenu: boolean
  notifications: {
    visible: boolean
    type: null | 'warning' | 'error' | 'success'
    message: null | string
  }
}

export interface ActionInterface {
  type: 'SET_MENU_TRUE' | 'SET_MENU_FALSE'
  payload: any
}
