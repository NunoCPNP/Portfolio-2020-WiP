import React from 'react'
import { useCookies } from 'react-cookie'

//* Component Imports
import AdminPage from '../sections/AdminPage'
import AdminLogin from '../sections/AdminLogin'

type Props = {}

const Admin: React.FC<Props> = () => {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies()

  return <>{cookies.auth ? <AdminPage /> : <AdminLogin />}</>
}

export default Admin
