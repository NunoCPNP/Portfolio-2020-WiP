import { useEffect, useContext } from 'react'

import { userContext } from '../context/user/context'

import { auth } from '../firebase/firebase'

export const useAuth = () => {
  const user = useContext(userContext)
  const { dispatch, state } = user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser: any) => {
      authUser ? dispatch({ type: 'USER_LOGIN', payload: authUser }) : dispatch({ type: 'USER_LOGOUT' })
    })

    return () => unsubscribe()
  }, [])
}
