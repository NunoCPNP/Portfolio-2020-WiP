/* eslint no-undef: 0 */
import axios from 'axios';

export const GET_PROJECTS = 'GET_PROJECTS';

export function getProjects() {
  return async function(dispatch: any) {
    const response = await axios.get(`${process.env.REACT_APP_API}projects`);
    const data = response.data;

    return dispatch({
      type: 'GET_PROJECTS',
      data
    });
  };
}
