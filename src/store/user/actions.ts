import { UserActionTypes } from './types'

export const setCurrentUser = (user: any) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
})
