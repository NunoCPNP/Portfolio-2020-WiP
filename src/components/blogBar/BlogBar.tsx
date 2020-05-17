import React from 'react'

import { signInWithGoogle, auth } from '../../firebase/firebase'

import { BarWrapper, StyledP, Button } from './BlogBar.styles'

type Props = {}

const BlogBar: React.FC<Props> = () => {
  return (
    <BarWrapper>
      {/* {currentUser ? (
        <>
          <StyledP>
            Hi <span>{currentUser.displayName}</span>
          </StyledP>
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </>
      ) : (
        <Button onClick={signInWithGoogle}>Login</Button>
      )} */}
    </BarWrapper>
  )
}

export default BlogBar
