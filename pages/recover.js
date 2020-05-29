import { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PasswordRecovery from '../components/PasswordRecovery'

const Title = styled.h1`
  margin: 20px;
`

function ProfilePage() {
  const [title] = useState('Password Recovery')

  return (
    <Layout title={title}>
      <Title>{title}</Title>
      <PasswordRecovery />
    </Layout>
  )
}

export default ProfilePage
