import React, { useEffect } from 'react'

import { UserStateProvider } from '../../context/user/context'

import { useDispatch, useSelector } from 'react-redux'
import { setControllers } from '../../store/controllers/actions'
import { StoreInterface } from '../../store/interface'

import BlogBar from '../../components/blogBar/BlogBar'

import { PageWrapper, ComingSoon } from './Blog.styles'

// import { auth } from '../../firebase/firebase'

type Props = {}

const Blog: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const controllers = useSelector((state: StoreInterface) => state.controllers)

  //* Google OAuth Listener
  // useEffect(() => {
  //   const googleListen = auth.onAuthStateChanged((authUser: any) => {
  //     authUser ? dispatch(setCurrentUser(authUser)) : dispatch(setCurrentUser(null))
  //   })
  //   return () => {
  //     googleListen()
  //   }
  // })

  useEffect(() => {
    controllers.appControllers.completeMenu = false
    dispatch(setControllers({ ...controllers }))
    // eslint-disable-next-line
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
