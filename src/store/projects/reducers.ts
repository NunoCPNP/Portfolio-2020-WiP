import { GET_PROJECTS } from './actions';

const initialState = {
  allProjects: [],
  allProjectsLoaded: false
};

export default function(state = initialState, action: any) {
  const { type, data } = action;
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        allProjects: data,
        allProjectsLoaded: true
      };
    default:
      return state;
  }
}
