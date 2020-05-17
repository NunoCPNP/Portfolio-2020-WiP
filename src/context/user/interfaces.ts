export interface StateInterface {
  loggedIn: boolean
  user: any
}

export interface ActionInterface {
  type: 'LOG_IN' | 'LOG_OUT'
  payload: any
}
