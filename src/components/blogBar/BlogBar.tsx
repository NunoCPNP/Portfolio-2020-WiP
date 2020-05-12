import React from 'react'
import { useSelector } from 'react-redux'

import { signInWithGoogle, auth } from '../../firebase/firebase'

import { BarWrapper, StyledP, Button } from './BlogBar.styles'

type Props = {}

const BlogBar: React.FC<Props> = () => {
  const currentUser = useSelector((state: any) => state.users.currentUser)

  return (
    <div data-test="BlogBar">
      <BarWrapper>
        {currentUser ? (
          <>
            <StyledP>
              Hi <span>{currentUser.displayName}</span>
            </StyledP>
            <Button onClick={() => auth.signOut()}>Logout</Button>
          </>
        ) : (
          <>
            <Button onClick={signInWithGoogle}>Login</Button>
          </>
        )}
      </BarWrapper>
    </div>
  )
}

export default BlogBar
