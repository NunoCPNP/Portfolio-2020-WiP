export interface ActionInterface {
  type: string
  payload: {}
}

export interface ProjectsInitialState {
  projectsList: null | Project[]
}

export interface Project {
  _id: string
  title: string
  cover: string
  description: string
  githuburl: string
  projecturl: string
  date: string
  __v: number
}
