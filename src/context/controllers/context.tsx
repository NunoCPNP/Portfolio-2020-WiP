import React, { createContext, useReducer } from 'react'

import { initialState } from './initialState'
import { reducer } from './reducer'

const controllersContext = createContext(initialState)
controllersContext.displayName = 'UserContext'

const { Provider } = controllersContext

const ControllersStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { controllersContext, ControllersStateProvider }
