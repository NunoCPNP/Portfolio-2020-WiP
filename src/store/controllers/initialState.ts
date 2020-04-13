import { ControllersInitialState } from './interface'

export const INITIAL_STATE: ControllersInitialState = {
  appControllers: {
    darkMode: true,
    loading: false,
    selectedProject: null,
    completeMenu: true,
    notifications: {
      visible: false,
      type: '',
      message: '',
    },
  },
}
