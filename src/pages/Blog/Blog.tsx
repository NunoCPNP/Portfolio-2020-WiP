import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../store/user/actions'
import { StoreInterface } from '../../store/interface'

import BlogBar from '../../components/blogBar/BlogBar'

import { setControllers } from '../../store/controllers/actions'

import { PageWrapper, ComingSoon } from './Blog.styles'

import { auth } from '../../firebase/firebase'

type Props = {}

const Blog: React.FC<Props> = () => {
  const dispatch = useDispatch()

  //* Google OAuth Listener
  useEffect(() => {
    const googleListen = auth.onAuthStateChanged((authUser: any) => {
      authUser ? dispatch(setCurrentUser(authUser)) : dispatch(setCurrentUser(null))
    })
    return () => {
      googleListen()
    }
  })

  const controllers = useSelector((state: StoreInterface) => state.controllers)

  useEffect(() => {
    controllers.appControllers.completeMenu = false
    dispatch(setControllers({ ...controllers }))
    // eslint-disable-next-line
  }, [])

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
