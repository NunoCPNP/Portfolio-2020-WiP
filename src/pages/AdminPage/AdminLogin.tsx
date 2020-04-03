import React, { useState, FormEvent } from 'react'
import { useCookies } from 'react-cookie'

import { PageWrapper, LeftWrapper, RightWrapper, FormWrapper, Button } from './AdminLogin.styles'

import { adminLogin } from '../../api/adminLogin'
import { setDuration } from '../../helpers/setDuration'

type Props = {}

const AdminLogin: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [cookies, setCookie, removeCookie] = useCookies()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    setEmail('')
    setPassword('')

    const response = await adminLogin(email, password)

    if (response?.status === 200) {
      const duration = setDuration(30)
      const token = response?.data.token

      setCookie('auth', token, {
        path: '/admin',
        expires: duration,
      })
    }
  }

  const handleEmail = (e: any) => setEmail(e.target.value)
  const handlePassword = (e: any) => setPassword(e.target.value)

  return (
    <>
      <PageWrapper>
        <LeftWrapper>
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={handleEmail} />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={handlePassword} />
              <Button type="submit"> Sign in </Button>
            </FormWrapper>
          </form>
        </LeftWrapper>
        <RightWrapper />
      </PageWrapper>
    </>
  )
}

export default AdminLogin
