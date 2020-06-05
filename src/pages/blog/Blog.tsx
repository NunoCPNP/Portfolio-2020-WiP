import React, { useContext, useEffect } from 'react'

import { controllersContext } from '../../context/controllers/context'

import BlogBar from '../../components/blogBar/BlogBar'

import { PageWrapper, ComingSoon } from './Blog.styles'

const Blog: React.FC = () => {
  const controllers = useContext(controllersContext)

  const { dispatch } = controllers

  useEffect(() => {
    dispatch({ type: 'SET_MENU_FALSE' })
  }, []) // eslint-disable-line

  return (
    <PageWrapper>
      <BlogBar />
      <ComingSoon>
        <div>Hello from Blog Page</div>
      </ComingSoon>
    </PageWrapper>
  )
}

export default Blog
