import { ControllersInitialState } from '../store/controllers/interface'
import { ProjectsInitialState } from '../store/projects/interface'

export interface StoreInterface {
  users: {
    currentUser: any
  }
  controllers: ControllersInitialState
  projects: ProjectsInitialState
  _persist: any
}
