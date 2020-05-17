export interface StateInterface {
  loggedIn: boolean
  user: any
}

export interface ActionInterface {
  type: 'USER_LOGIN' | 'USER_LOGOUT'
  payload: any
}
