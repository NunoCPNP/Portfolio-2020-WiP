import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreInterface } from '../store/interface'

import BlogBar from '../components/blogBar/BlogBar'

import { setControllers } from '../store/controllers/actions'

import { PageWrapper } from './Blog.styles'

type Props = {}

const Blog: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const controllers = useSelector((state: StoreInterface) => state.controllers)

  useEffect(() => {
    controllers.appControllers.completeMenu = false
    dispatch(setControllers({ ...controllers }))
    // eslint-disable-next-line
  }, [])

  return (
    <PageWrapper>
      <BlogBar />
      <div>Hello from Blog Page</div>
    </PageWrapper>
  )
}

export default Blog
