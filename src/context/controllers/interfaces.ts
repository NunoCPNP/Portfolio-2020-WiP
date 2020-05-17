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
  type: 'TOGGLE_MENU'
  payload: any
}
