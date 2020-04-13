import { ControllersActionTypes } from './types'

export const setControllers = (data: any) => {
  return function(dispatch: any) {
    return dispatch({
      type: ControllersActionTypes.SET_CONTROLLERS,
      payload: data,
    })
  }
}
