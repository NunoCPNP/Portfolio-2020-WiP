import React from 'react'

import AdminButton from '../components/buttons/AdminButton'

import { Wrapper, Container, Navigation } from './AdminPage.styles'

type Props = {}

const AdminPage: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Container>
        <Navigation>
          <h4>Projects</h4>
          <AdminButton label="Add Project" handleClick={() => null} />
          <AdminButton label="List Projects" handleClick={() => null} />
          <h4>Users</h4>
          <AdminButton label="Add User" handleClick={() => null} />
          <AdminButton label="List Users" handleClick={() => null} />
        </Navigation>
      </Container>
    </Wrapper>
  )
}

export default AdminPage
