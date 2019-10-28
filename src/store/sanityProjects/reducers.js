import { GET_PROJECTS } from './actions'

const initialState = {
  projects: []
}

export default function (state = initialState, action) {
  const { type, data } = action
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: data
      }
    default:
      return state
  }
}
