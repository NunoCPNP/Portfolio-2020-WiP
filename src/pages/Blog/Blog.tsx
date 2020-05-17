import React, { useContext, useEffect } from 'react'

import { UserStateProvider } from '../../context/user/context'
import { controllersContext } from '../../context/controllers/context'
import { userContext } from '../../context/user/context'

import { useAuth } from '../../api/useAuth'

import BlogBar from '../../components/blogBar/BlogBar'

import { PageWrapper, ComingSoon } from './Blog.styles'

const Blog: React.FC = () => {
  const controllers = useContext(controllersContext)
  const user = useContext(userContext)

  console.log('CONTROLLERS: ', controllers)
  console.log('USERS: ', user)

  const { dispatch } = controllers

  useEffect(() => {
    dispatch({ type: 'TOGGLE_MENU' })
  }, []) // eslint-disable-line

  // useAuth()

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
