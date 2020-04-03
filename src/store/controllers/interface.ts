export interface ActionInterface {
  type: string
  payload: {}
}

export interface ControllersInitialState {
  appControllers: {
    darkMode: boolean
    loading: boolean
    selectedProject: null | string
    completeMenu: boolean
    notifications: {
      visible: boolean
      type: string
      message: string
    }
  }
}
