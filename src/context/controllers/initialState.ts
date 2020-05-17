interface InitialStateInterface {
  darkMode: boolean
  notifications: {
    visible: boolean
    type: null | 'warning' | 'error' | 'sucess'
    message: null | string
  }
}

export const initialState: InitialStateInterface = {
  darkMode: true,
  notifications: {
    visible: false,
    type: null,
    message: null,
  },
}
