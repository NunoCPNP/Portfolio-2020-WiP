import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//* Redux Middlewares
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middlewares = applyMiddleware(thunk)
const enhancer = composeWithDevTools(middlewares)

export const store: any = createStore(rootReducer, enhancer)

export default store
