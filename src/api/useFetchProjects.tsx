import { useEffect, useReducer } from 'react'
import Prismic from 'prismic-javascript'

const apiEndpoint: any = process.env.REACT_APP_PRISMIC_URL
const accessToken: any = process.env.REACT_APP_PRISMIC_KEY

const Client: any = Prismic.client(apiEndpoint, { accessToken })

const initialState = {
  projects: [],
  project: null,
  loading: true,
  error: false,
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projects: action.payload,
        loading: false,
      }

    case 'SET_PROJECT':
      const filteredProject = state.projects.filter((project: any) => action.payload === project.id)[0]

      return {
        ...state,
        project: filteredProject,
      }

    case 'RESET_PROJECT':
      return {
        ...state,
        project: null,
      }

    default:
      return state
  }
}

export const useFetchProjects = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await Client.query(Prismic.Predicates.at('document.type', 'projects'))

      if (response) {
        dispatch({ type: 'FETCH_PROJECTS', payload: response.results })
      }
    }
    fetchProjects()
  }, [])

  return { state, dispatch }
}
