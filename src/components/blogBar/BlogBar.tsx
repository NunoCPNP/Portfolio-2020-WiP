import React from 'react'
import { useSelector } from 'react-redux'

import { signInWithGoogle, auth } from '../../firebase/firebase'

import { BarWrapper, Button, P } from './BlogBar.styles'

type Props = {}

const BlogBar: React.FC<Props> = () => {
  const currentUser = useSelector((state: any) => state.users.currentUser)

  return (
    <>
      <BarWrapper>
        {currentUser ? (
          <>
            <P>
              Hi <span>{currentUser.displayName}</span>
            </P>
            <Button onClick={() => auth.signOut()}>Logout</Button>
          </>
        ) : (
          <>
            <Button onClick={signInWithGoogle}>Login</Button>
          </>
        )}
      </BarWrapper>
    </>
  )
}

export default BlogBar