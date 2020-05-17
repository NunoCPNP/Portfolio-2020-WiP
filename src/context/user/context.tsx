import React, { createContext, useReducer } from 'react'

import { initialState } from './initialState'
import { reducer } from './reducer'

const userContext = createContext(initialState)
userContext.displayName = 'UserContext'

const { Provider } = userContext

const UserStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { userContext, UserStateProvider }
