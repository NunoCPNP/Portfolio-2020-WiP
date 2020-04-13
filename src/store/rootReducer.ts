import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import sessionStorage from 'redux-persist/lib/storage/session'

//* Redux Reducers
import userHandler from './user/reducers'
import controllersHandler from './controllers/reducers'
import projectsHandler from './projects/reducers'

const persistConfig = {
  key: 'NP2020',
  storage: sessionStorage,
}

//* Root Reducers
const rootReducer = combineReducers({
  users: userHandler,
  controllers: controllersHandler,
  projects: projectsHandler,
})

export default persistReducer(persistConfig, rootReducer)
