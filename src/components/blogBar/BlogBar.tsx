import React, { useContext } from 'react'

import { userContext } from '../../context/user/context'

import { signInWithGoogle, auth } from '../../firebase/firebase'

import { BarWrapper, StyledP, Button } from './BlogBar.styles'

const BlogBar: React.FC = () => {
  const users = useContext(userContext)
  const { loggedIn, user } = users.state

  return (
    <BarWrapper>
      {loggedIn ? (
        <>
          <StyledP>
            Hi <span>{user.displayName}</span>
          </StyledP>
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Login</Button>
      )}
    </BarWrapper>
  )
}

export default BlogBar
