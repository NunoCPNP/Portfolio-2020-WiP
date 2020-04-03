import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'

//* Redux Middlewares
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middlewares = applyMiddleware(thunk)
const enhancer = composeWithDevTools(middlewares)

export const store: any = createStore(rootReducer, enhancer)

export const persistor = persistStore(store)

export default { store, persistor }
