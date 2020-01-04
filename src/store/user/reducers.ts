import { UserActionTypes } from './types';

const INITIAL_STATE = {
  currentUser: null
};

const userHandler = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userHandler;
