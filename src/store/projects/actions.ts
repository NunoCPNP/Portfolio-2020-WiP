import axios from 'axios'

import { ProjectsActionTypes } from './types'

export const setProjects = () => {
  return async function(dispatch: any) {
    const response = await axios.get('http://localhost:3333/projects')
    const data = response.data

    return dispatch({
      type: ProjectsActionTypes.SET_PROJECTS,
      payload: data,
    })
  }
}
