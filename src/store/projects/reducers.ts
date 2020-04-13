import { ProjectsActionTypes } from './types'
import { ActionInterface } from './interface'
import { INITIAL_STATE } from './initialState'

const projectsHandler = (state = INITIAL_STATE, action: ActionInterface) => {
  const { type, payload } = action

  switch (type) {
    case ProjectsActionTypes.SET_PROJECTS:
      return {
        ...state,
        projectsList: payload,
      }
    default:
      return state
  }
}
export default projectsHandler
