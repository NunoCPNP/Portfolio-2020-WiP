import React, { useContext, useEffect } from 'react'

import { controllersContext } from '../../context/controllers/context'
import { UserStateProvider } from '../../context/user/context'

import BlogBar from '../../components/blogBar/BlogBar'

import { PageWrapper, ComingSoon } from './Blog.styles'

// import { auth } from '../../firebase/firebase'

type Props = {}

const Blog: React.FC<Props> = () => {
  const controllers = useContext(controllersContext)
  const { dispatch } = controllers

  useEffect(() => {
    dispatch({ type: 'TOGGLE_MENU' })
  }, [])

  return (
    <UserStateProvider>
      <PageWrapper>
        <BlogBar />
        <ComingSoon>
          <div>Hello from Blog Page</div>
        </ComingSoon>
      </PageWrapper>
    </UserStateProvider>
  )
}

export default Blog
