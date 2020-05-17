import React, { useEffect, useContext } from 'react'

import { userContext } from '../context/user/context'

import { auth } from '../firebase/firebase'

export const useAuth = () => {
  const user = useContext(userContext)
  const { dispatch } = user

  console.log('CONTEXT', user)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser: any) => {
      authUser ? dispatch({ action: 'USER_LOGIN', payload: authUser }) : dispatch({ action: 'USER_LOGOUT' })
    })

    return () => unsubscribe()
  }, [])
}
